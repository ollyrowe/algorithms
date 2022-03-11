<template>
  <div class="main-container">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "@/components/site/header/Header.vue";
import Body from "@/components/site/body/Body.vue";
import Footer from "@/components/site/footer/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Body,
    Footer,
  },
});
</script>

<style scoped>
.main-container {
  background: #f2f2f2;
}
</style>
