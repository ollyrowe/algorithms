<template>
  <router-link :to="to" class="link">#</router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AnchorLink",
  props: {
    to: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

.link {
  color: $primary;
  text-decoration: none;
}

.link:hover {
  color: #363636;
}
</style>
