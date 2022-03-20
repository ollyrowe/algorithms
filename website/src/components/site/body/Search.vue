<template>
  <section>
    <b-field>
      <b-autocomplete
        v-if="hasDropdown"
        :value="localText"
        :data="searchResults"
        group-field="type"
        group-options="items"
        placeholder="Search..."
        icon="search"
        class="search-input"
        clear-on-select
        clearable
        rounded
        @input="onInput"
        @select="onSelect"
      >
        <template #empty>No results found</template>
      </b-autocomplete>
      <b-input
        v-else
        :value="localText"
        placeholder="Search..."
        icon="search"
        icon-right="close-circle"
        icon-right-clickable
        clearable
        rounded
        @input="onInput"
        @icon-right-click="onClear"
      />
    </b-field>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import store from "@/store";

import toTitleCase from "@/utils/toTitleCase";

interface SearchItem {
  type: string;
  items: string[];
}

export default Vue.extend({
  name: "Search",
  props: {
    text: {
      type: String,
      default: "",
    },
    hasDropdown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localText: this.text,
    };
  },
  computed: {
    content() {
      return store.state.content;
    },
    searchItems() {
      let searchItems: SearchItem[] = [];

      this.content.forEach((resource) => {
        const resourceType = toTitleCase(resource.type);

        const resourceTypeItems = searchItems.find(
          (searchItem) => searchItem.type == resourceType
        );

        if (resourceTypeItems) {
          searchItems = searchItems.map(({ type, items }) => ({
            type,
            items: [...items, resource.name],
          }));
        } else {
          searchItems.push({ type: resourceType, items: [resource.name] });
        }
      });

      return searchItems;
    },
    searchResults(): SearchItem[] {
      const searchResults = this.searchItems.map(({ type, items }) => ({
        type,
        items: items.filter((item) =>
          item.toLowerCase().includes(this.localText.toLowerCase())
        ),
      }));

      // Remove any search result groups that have no items
      return searchResults.filter((result) => result.items.length);
    },
  },
  watch: {
    text(text) {
      this.localText = text;
    },
  },
  methods: {
    onInput(text: string) {
      this.localText = text;
      this.$emit("update:text", text);
    },
    onSelect(option: string) {
      if (option) {
        const resource = this.content.find(
          (resource) => resource.name === option
        );

        if (resource) {
          const newPath = `/${resource.type}/${resource.resource}`;

          if (this.$route.path !== newPath) {
            this.$router.push(newPath);
          }
        }
      }
    },
    onClear() {
      this.onInput("");
    },
  },
});
</script>

<style scoped>
.search-input {
  min-width: 300px;
}
</style>
