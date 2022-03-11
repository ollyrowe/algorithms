<template>
  <div id="info" class="box">
    <div class="is-flex">
      <h4 id="const" class="is-3 is-flex-grow-1">
        <AnchorLink to="#info" />
        Info
      </h4>
    </div>
    <div>
      <p v-if="content">{{ content }}</p>
      <WarningMessage v-else>
        The information for this resource is yet to be complete
      </WarningMessage>
    </div>
  </div>
</template>

<script>
import AnchorLink from "../misc/AnchorLink.vue";
import WarningMessage from "../misc/WarningMessage.vue";

export default {
  name: "InfoCard",
  components: { AnchorLink, WarningMessage },
  props: {
    content: String,
  },
};
</script>
