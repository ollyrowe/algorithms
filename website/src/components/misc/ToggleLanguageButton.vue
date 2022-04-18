<template>
  <b-tooltip
    :label="`Show ${language.name}`"
    type="is-dark"
    position="is-bottom"
  >
    <b-button
      :class="{
        disabled,
        'is-light': disabled,
      }"
      @click="$emit('click')"
    >
      <LanguageIcon :language="language" />
    </b-button>
  </b-tooltip>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Language } from "@/store/types";

import LanguageIcon from "./LanguageIcon.vue";

export default Vue.extend({
  name: "ToggleLanguageButton",
  components: { LanguageIcon },
  props: {
    language: {
      type: Object as PropType<Language>,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.disabled {
  filter: grayscale(100%);
}
</style>
