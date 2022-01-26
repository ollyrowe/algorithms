<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <div class="content is-medium">
            <div class="is-flex">
              <h3 class="title is-3 is-flex-grow-1">{{ currentRoute }}</h3>
              <Search />
            </div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";

import toTitleCase from "@/utils/toTitleCase";

export default {
  name: "Body",
  components: { Menu, Search },
  computed: {
    currentRoute() {
      const route = this.$route;

      const resource = route.params.name;

      if (resource) {
        return toTitleCase(resource.replace("-", " "));
      }

      return route.name;
    }
  }
};
</script>
