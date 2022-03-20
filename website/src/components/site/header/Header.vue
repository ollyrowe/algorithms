<template>
  <div>
    <NavBar v-if="isMobile()" />
    <section v-else class="hero is-secondary">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <div class="container content is-flex">
              <div>
                <i class="fas fa-code fa-5x"></i>
                <h1 class="title">Algorithms</h1>
                <h3 class="subtitle has-text-primary">
                  A collection of computing algorithms
                </h3>
              </div>
              <img
                src="@/assets/images/illustrations/programming.svg"
                alt="Programming Image"
                class="programming-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import windowMixin from "@/utils/windowMixin";

import NavBar from "./NavBar.vue";

export default windowMixin.extend({
  name: "Header",
  components: {
    NavBar,
  },
});
</script>

<style scoped>
.programming-image {
  max-height: 200px;
  margin-left: auto;
}
</style>
