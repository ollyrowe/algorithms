<template>
  <b-message type="is-warning" has-icon>
    <div class="message-content">
      <slot />
    </div>
  </b-message>
</template>

<script>
export default {
  name: "WarningMessage",
};
</script>

<style scoped>
.message-content {
  display: flex;
  align-items: center;
  min-height: 48px;
}
</style>
