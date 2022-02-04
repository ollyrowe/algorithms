<template>
  <b-navbar type="is-secondary" :active.sync="open" fixed-top>
    <template #brand>
      <div class="is-flex is-align-items-center">
        <i class="fas fa-code fa-lg p-4"></i>
        <h1 class="title is-4 has-text-white m-0">Algorithms</h1>
        <a href="https://github.com/ollyrowe/algorithms">
          <i class="fab fa-github fa-lg p-4 has-text-white"></i>
        </a>
      </div>
    </template>
    <template #start>
      <b-menu>
        <Search :text.sync="searchText" class="px-3 pb-3 pt-2" />
        <b-menu-list>
          <b-menu-item
            v-for="menuItem of menuItems"
            :key="menuItem.name"
            :expanded="menuItem.expanded"
            class="menu-list-item"
          >
            <template #label="props">
              {{ menuItem.name }}
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'fas fa-caret-up' : 'fas fa-caret-down'"
              />
            </template>
            <b-menu-item
              v-for="subItem of menuItem.items"
              :key="subItem.link"
              tag="router-link"
              :to="`/${menuItem.path}/${subItem.link}`"
              class="list-item"
              :active="subItem.active"
            >
              <template #label>
                <div class="list-item-label" @click="onClose">
                  {{ subItem.name }}
                </div>
              </template>
            </b-menu-item>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </template>
  </b-navbar>
</template>

<script>
import Search from "../body/Search.vue";

export default {
  name: "NavBar",
  components: { Search },
  data() {
    return {
      open: false,
      searchText: ""
    };
  },
  computed: {
    general() {
      return this.$store.getters.general;
    },
    sortAlgorithms() {
      return this.$store.getters.sortAlgorithms;
    },
    searchAlgorithms() {
      return this.$store.getters.searchAlgorithms;
    },
    dataStructures() {
      return this.$store.getters.dataStructures;
    },
    menuItems() {
      const menuItems = [
        {
          name: "General",
          path: "general",
          items: this.getItemsModal(this.general)
        },
        {
          name: "Sort Algorithms",
          path: "algorithms",
          items: this.getItemsModal(this.sortAlgorithms)
        },
        {
          name: "Search Algorithms",
          path: "algorithms",
          items: this.getItemsModal(this.searchAlgorithms)
        },
        {
          name: "Data Structures",
          path: "data-structures",
          items: this.getItemsModal(this.dataStructures)
        }
      ];
      // Appended expanded prop and filter out any menu items that have no nested items
      return menuItems
        .map(menuItem => ({
          ...menuItem,
          expanded: Boolean(
            this.searchText || menuItem.items.find(item => item.active)
          )
        }))
        .filter(menuItem => menuItem.items.length > 0);
    }
  },
  methods: {
    getItemsModal(items) {
      return items
        .filter(item =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        )
        .map(item => {
          const currentResource = this.$route.params.name;

          const active = item.resource === currentResource;

          return { name: item.name, link: item.resource, active };
        });
    },
    onClose() {
      this.open = false;
      this.searchText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

::v-deep .menu-list-item > a.is-active {
  background-color: inherit;
  color: $text;
}

.list-item-label {
  padding: 0.5em 0.75em;
}

::v-deep .list-item > a {
  padding: 0;
}
</style>
