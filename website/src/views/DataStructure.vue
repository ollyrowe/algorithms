<template>
  <div class="box">
    <div class="is-flex">
      <h4 id="const" class="is-3 is-flex-grow-1">Coming soon...</h4>
      <span class="icon has-text-dark is-size-4">
        <i class="fas fa-tools"></i>
      </span>
    </div>
    <article class="message is-primary coming-soon-message">
      <img src="@/assets/images/illustrations/progress.svg" alt="Upcoming" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import store from "@/store";

export default Vue.extend({
  name: "DataStructure",
  computed: {
    dataStructure() {
      const dataStructureName = this.$route.params.name;

      const dataStructures = store.getters.dataStructures;

      return dataStructures.find(
        (dataStructure) => dataStructure.resource === dataStructureName
      );
    },
  },
});
</script>

<style scoped>
.coming-soon-message {
  display: flex;
  justify-content: center;
  padding: 2em;
  max-height: 450px;
}
</style>
