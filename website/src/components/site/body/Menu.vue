<template>
  <aside class="menu is-medium">
    <b-menu-list label="Languages">
      <li v-for="(language, index) of languages" :key="index" class="m-3">
        <router-link :to="`#${language.anchor}`" class="p-0">
          <div class="button is-white is-flex">
            <img
              :src="language.image"
              :alt="`${language.name} Logo`"
              class="language-logo"
            />
            <span class="language-name has-text-grey has-text-weight-semibold">
              {{ language.name }}
            </span>
            <b-icon icon="chevron-right" size="is-small" type="is-grey" />
          </div>
        </router-link>
      </li>
    </b-menu-list>
    <b-menu-list label="General">
      <b-menu-item
        v-for="(resource, index) of general"
        :key="index"
        :label="resource.name"
        tag="router-link"
        :to="`/general/${getLink(resource.name)}`"
        class="list-item"
      />
    </b-menu-list>
    <b-menu-list label="Sort Algorithms">
      <b-menu-item
        v-for="(algorithm, index) of sortAlgorithms"
        :key="index"
        :label="algorithm.name"
        tag="router-link"
        :to="`/algorithms/${getLink(algorithm.name)}`"
        class="list-item"
      />
    </b-menu-list>
    <b-menu-list label="Search Algorithms">
      <b-menu-item
        v-for="(algorithm, index) of searchAlgorithms"
        :key="index"
        :label="algorithm.name"
        tag="router-link"
        :to="`/algorithms/${getLink(algorithm.name)}`"
        class="list-item"
      />
    </b-menu-list>
    <b-menu-list label="Data Structures">
      <b-menu-item
        v-for="(dataStructure, index) of dataStructures"
        :key="index"
        :label="dataStructure.name"
        tag="router-link"
        :to="`/data-structures/${getLink(dataStructure.name)}`"
        class="list-item"
      />
    </b-menu-list>
  </aside>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    languages() {
      return this.$store.state.languages;
    },
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
  },
  methods: {
    getLink(algorithm) {
      return algorithm.split(" ").join("-").toLowerCase();
    },
  },
};
</script>

<style scoped>
.language-logo {
  height: 20px;
}

.language-name {
  margin-right: auto;
  margin-left: 0.75rem;
}
</style>
