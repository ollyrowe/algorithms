<template>
  <div :id="first.language.anchor" class="box wrapper">
    <div :id="second.language.anchor" class="is-flex inner">
      <h4 class="is-3 is-flex-grow-1">
        <AnchorLink :to="`#${selected.language.anchor}`" />
        {{ selected.language.name }}
      </h4>
      <div class="field has-addons">
        <div class="control">
          <ToggleLanguageButton
            :language="first.language"
            :disabled="selected.language.name !== first.language.name"
            @click="setSelected(first)"
          />
        </div>
        <div class="control">
          <ToggleLanguageButton
            :language="second.language"
            :disabled="selected.language.name !== second.language.name"
            @click="setSelected(second)"
          />
        </div>
      </div>
    </div>
    <Prism v-if="selected.code" :language="selected.language.languageClass">
      {{ selected.code }}
    </Prism>
    <WarningMessage v-else>
      The implementation for this resource is yet to be complete
    </WarningMessage>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { LanguageInfo } from "@/store/types";

import Prism from "vue-prism-component";
import AnchorLink from "../misc/AnchorLink.vue";
import WarningMessage from "../misc/WarningMessage.vue";
import ToggleLanguageButton from "../misc/ToggleLanguageButton.vue";

export default Vue.extend({
  name: "ToggleLanguageCard",
  components: {
    Prism,
    AnchorLink,
    WarningMessage,
    ToggleLanguageButton,
  },
  props: {
    first: {
      type: Object as PropType<LanguageInfo>,
      required: true,
    },
    second: {
      type: Object as PropType<LanguageInfo>,
      required: true,
    },
  },
  data() {
    return {
      selected: this.first,
    };
  },
  methods: {
    setSelected(selected: LanguageInfo) {
      // Avoid redundant state update and navigation
      if (this.selected !== selected) {
        this.selected = selected;

        this.$router.push({ hash: `#${selected.language.anchor}` });
      }
    },
    /**
     * Syncronises the selected state based on current route anchor
     */
    syncSelected() {
      // Remove the # from the start of the hash value
      const anchor = this.$route.hash.substring(1);

      switch (anchor) {
        case this.first.language.anchor:
          this.selected = this.first;
          break;
        case this.second.language.anchor:
          this.selected = this.second;
          break;
      }
    },
  },
  watch: {
    $route() {
      this.syncSelected();
    },
  },
  mounted() {
    this.syncSelected();
  },
});
</script>

<style scoped>
.wrapper {
  padding-top: 0;
}

.inner {
  padding-top: 1.25rem;
}
</style>
