<template>
  <div class="box">
    <div class="is-flex">
      <h4 class="is-3 is-flex-grow-1">Coming soon...</h4>
      <span class="icon has-text-dark is-size-4">
        <i class="fas fa-tools"></i>
      </span>
    </div>
    <article class="message is-primary upcoming-message">
      <img
        src="@/assets/images/illustrations/visualisation.svg"
        alt="Upcoming Visualisation"
      />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VisualisationCard",
});
</script>

<style scoped>
.upcoming-message {
  padding: 4em 2em;
}
</style>
