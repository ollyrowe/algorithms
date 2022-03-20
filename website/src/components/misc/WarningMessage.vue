<template>
  <b-message type="is-warning" has-icon>
    <div class="message-content">
      <slot />
    </div>
  </b-message>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WarningMessage",
});
</script>

<style scoped>
.message-content {
  display: flex;
  align-items: center;
  min-height: 48px;
}
</style>
