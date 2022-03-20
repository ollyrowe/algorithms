<template>
  <div :id="anchor" class="box">
    <div class="is-flex">
      <h4 id="const" class="is-3 is-flex-grow-1">
        <AnchorLink :to="`#${anchor}`" />
        {{ name }}
      </h4>
      <img :src="image" :alt="`${name} Logo`" class="image" />
    </div>
    <Prism v-if="code" :language="languageClass">{{ code }}</Prism>
    <WarningMessage v-else>
      The implementation for this resource is yet to be complete
    </WarningMessage>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Prism from "vue-prism-component";
import AnchorLink from "../misc/AnchorLink.vue";
import WarningMessage from "../misc/WarningMessage.vue";

export default Vue.extend({
  name: "LanguageCard",
  components: { Prism, AnchorLink, WarningMessage },
  props: {
    name: String,
    image: String,
    anchor: String,
    languageClass: String,
    code: String,
  },
});
</script>

<style scoped>
.image {
  height: 30px;
}
</style>
