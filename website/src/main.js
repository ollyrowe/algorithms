import Vue from "vue";
import Buefy from "buefy";

import "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-python";

import "./assets/styles/styles.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Buefy, { defaultIconPack: "fas" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
