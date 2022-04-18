<template>
  <div :id="language.anchor" class="box">
    <div class="is-flex">
      <h4 class="is-3 is-flex-grow-1">
        <AnchorLink :to="`#${language.anchor}`" />
        {{ language.name }}
      </h4>
      <LanguageIcon :language="language" />
    </div>
    <Prism v-if="code" :language="language.languageClass">{{ code }}</Prism>
    <WarningMessage v-else>
      The implementation for this resource is yet to be complete
    </WarningMessage>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Language } from "@/store/types";

import Prism from "vue-prism-component";
import AnchorLink from "../misc/AnchorLink.vue";
import LanguageIcon from "../misc/LanguageIcon.vue";
import WarningMessage from "../misc/WarningMessage.vue";

export default Vue.extend({
  name: "LanguageCard",
  components: {
    Prism,
    AnchorLink,
    WarningMessage,
    LanguageIcon,
  },
  props: {
    language: Object as PropType<Language>,
    code: {
      type: String,
      required: false,
    },
  },
});
</script>
