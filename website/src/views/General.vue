<template>
  <div v-if="resource">
    <InfoCard :content="resource.info" />
    <ToggleLanguageCard :first="jsLanguageInfo" :second="tsLanguageInfo" />
    <LanguageCard
      v-for="(language, index) of otherLanguages"
      :key="index"
      :language="language"
      :code="resource[language.extension]"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import store from "@/store";

import { Language, LanguageInfo, Resource } from "@/store/types";

import InfoCard from "@/components/cards/InfoCard.vue";
import LanguageCard from "@/components/cards/LanguageCard.vue";
import ToggleLanguageCard from "@/components/cards/ToggleLanguageCard.vue";

export default Vue.extend({
  name: "General",
  components: {
    InfoCard,
    LanguageCard,
    ToggleLanguageCard,
  },
  computed: {
    jsLanguageInfo(): LanguageInfo {
      const language = store.state.languages.find(
        (language) => language.extension === "js"
      )!;

      const code = this.resource.js;

      return { language, code };
    },
    tsLanguageInfo(): LanguageInfo {
      const language = store.state.languages.find(
        (language) => language.extension === "ts"
      )!;

      const code = this.resource.ts;

      return { language, code };
    },
    otherLanguages(): Language[] {
      return store.state.languages.filter(
        // Filter out JavaScript and TypeScript
        (language) => language.extension !== "js" && language.extension !== "ts"
      );
    },
    resource(): Resource {
      const resourceName = this.$route.params.name;

      const resources = store.getters.general;

      return resources.find((resource) => resource.resource === resourceName)!;
    },
  },
});
</script>
