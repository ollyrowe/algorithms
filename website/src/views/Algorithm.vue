<template>
  <div v-if="algorithm">
    <InfoCard :content="algorithm.info" />
    <ToggleLanguageCard :first="jsLanguageInfo" :second="tsLanguageInfo" />
    <LanguageCard
      v-for="(language, index) of otherLanguages"
      :key="index"
      :language="language"
      :code="algorithm[language.extension]"
    />
    <h3 class="title is-3">Visualisation</h3>
    <VisualisationCard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Language, LanguageInfo, Resource } from "@/store/types";

import store from "@/store";

import LanguageCard from "@/components/cards/LanguageCard.vue";
import ToggleLanguageCard from "@/components/cards/ToggleLanguageCard.vue";
import VisualisationCard from "@/components/cards/VisualisationCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";

export default Vue.extend({
  name: "Algorithm",
  components: {
    LanguageCard,
    ToggleLanguageCard,
    VisualisationCard,
    InfoCard,
  },
  computed: {
    jsLanguageInfo(): LanguageInfo {
      const language = store.state.languages.find(
        (language) => language.extension === "js"
      )!;

      const code = this.algorithm.js;

      return { language, code };
    },
    tsLanguageInfo(): LanguageInfo {
      const language = store.state.languages.find(
        (language) => language.extension === "ts"
      )!;

      const code = this.algorithm.ts;

      return { language, code };
    },
    otherLanguages(): Language[] {
      return store.state.languages.filter(
        // Filter out JavaScript and TypeScript
        (language) => language.extension !== "js" && language.extension !== "ts"
      );
    },
    algorithm(): Resource {
      const algorithmName = this.$route.params.name;

      const algorithms = store.getters.algorithms;

      return algorithms.find(
        (algorithm) => algorithm.resource === algorithmName
      )!;
    },
  },
});
</script>
