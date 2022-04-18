import Vue from "vue";

import { BULMA_BREAKPOINTS } from "@/store/constants";

/**
 * Vue Window Mixin.
 *
 * Provides:
 *  - Window width and height data values
 *  - Utility methods to assist common breakpoints
 */
export default Vue.extend({
  data() {
    return {
      window: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  },
  methods: {
    isMobile() {
      return this.window.width <= BULMA_BREAKPOINTS.mobile;
    },
    isTablet() {
      return (
        this.window.width >= BULMA_BREAKPOINTS.tablet &&
        this.window.width < BULMA_BREAKPOINTS.desktop
      );
    },
    isDesktop() {
      return this.window.width >= BULMA_BREAKPOINTS.desktop;
    },
    onResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
});
