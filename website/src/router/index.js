import Vue from "vue";
import VueRouter from "vue-router";
// Import config
import config from "../../vue.config";
// Import store
import store from "../store";
// Import views
import General from "@/views/General.vue";
import Algorithm from "@/views/Algorithm.vue";
import DataStructure from "@/views/DataStructure.vue";

Vue.use(VueRouter);

const defaultPath = "/general/hello-world";

export const routes = [
  {
    path: "/general/:name",
    name: "General",
    component: General
  },
  {
    path: "/algorithms/:name",
    name: "Algorithms",
    component: Algorithm
  },
  {
    path: "/data-structures/:name",
    name: "Data Structures",
    component: DataStructure
  },
  {
    path: "/:catchAll(.*)",
    redirect: defaultPath
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: config.publicPath,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  }
});

/**
 * Before enter route hook which verifies that the specified resource
 * exists, otherwise will redirect the user back to the default path.
 */
function beforeEnter(to, _from, next) {
  const splitPath = to.path.split("/");

  const resourceType = splitPath[splitPath.length - 2];
  const resourceName = splitPath[splitPath.length - 1];

  // Find the resource in the content held within the store
  const doesResourceExist = !!store.state.content.find(
    ({ type, resource }) => type === resourceType && resource === resourceName
  );

  if (doesResourceExist) {
    next();
  } else {
    next(defaultPath);
  }
}

router.beforeEach(beforeEnter);

export default router;
