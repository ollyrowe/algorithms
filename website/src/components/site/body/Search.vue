<template>
  <section>
    <b-field>
      <b-autocomplete
        v-model="searchText"
        :data="searchResults"
        group-field="type"
        group-options="items"
        placeholder="Search..."
        icon="search"
        class="search-input"
        @select="onSelect"
        clear-on-select
        clearable
        rounded
      >
        <template #empty>No results found</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
import toTitleCase from "@/utils/toTitleCase";

export default {
  name: "Search",
  data() {
    return { searchText: "" };
  },
  computed: {
    content() {
      return this.$store.state.content;
    },
    searchItems() {
      let searchItems = [];

      this.content.forEach(resource => {
        const resourceType = toTitleCase(resource.type);

        const resourceTypeItems = searchItems.find(
          searchItem => searchItem.name == resourceType
        );

        if (resourceTypeItems) {
          searchItems = searchItems.map(({ type, items }) => ({
            type,
            items: [...items, resource.name]
          }));
        } else {
          searchItems.push({ type: resourceType, items: [resource.name] });
        }
      });

      return searchItems;
    },
    searchResults() {
      const searchResults = this.searchItems.map(({ type, items }) => ({
        type,
        items: items.filter(item =>
          item.toLowerCase().includes(this.searchText.toLowerCase())
        )
      }));

      // Remove any search result groups that have no items
      return searchResults.filter(result => result.items.length);
    }
  },
  methods: {
    onSelect(option) {
      if (option) {
        const { type, resource } = this.content.find(
          resource => resource.name === option
        );

        const newPath = `/${type}/${resource}`;

        if (this.$route.path !== newPath) {
          this.$router.push(newPath);
        }
      }
    }
  }
};
</script>

<style scoped>
.search-input {
  min-width: 300px;
}
</style>
