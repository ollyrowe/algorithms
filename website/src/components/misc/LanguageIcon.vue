<template>
  <img :src="language.image" :alt="`${language.name} Logo`" class="image" />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Language } from "@/store/types";

export default Vue.extend({
  name: "LanguageIcon",
  props: {
    language: {
      type: Object as PropType<Language>,
      required: true,
    },
  },
});
</script>

<style scoped>
.image {
  height: 30px;
}
</style>
