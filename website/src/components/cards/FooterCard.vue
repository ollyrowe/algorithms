<template>
  <article class="notification media has-background-white">
    <figure class="media-left">
      <span class="icon">
        <i :class="iconClass"></i>
      </span>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1 class="title is-size-4">{{ title }}</h1>
        <p class="is-size-5 subtitle">
          <slot />
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FooterCard",
  props: {
    title: String,
    iconClass: String,
  },
});
</script>

<style lang="scss" scoped>
.media-content {
  overflow: hidden;
}

/* Fixes text clipping issue */
.subtitle {
  line-height: inherit;
}
</style>
