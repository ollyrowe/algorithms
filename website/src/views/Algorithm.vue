<template>
  <div v-if="algorithm">
    <InfoCard :content="algorithm.info" />
    <LanguageCard
      v-for="(language, index) of languages"
      :key="index"
      v-bind="language"
      :code="algorithm[language.extension]"
    />
    <h3 class="title is-3">Visualisation</h3>
    <VisualisationCard />
  </div>
</template>

<script>
import LanguageCard from "@/components/cards/LanguageCard.vue";
import VisualisationCard from "@/components/cards/VisualisationCard.vue";
import InfoCard from "@/components/cards/InfoCard.vue";

export default {
  name: "Algorithm",
  components: { LanguageCard, VisualisationCard, InfoCard },
  computed: {
    languages() {
      return this.$store.state.languages;
    },
    algorithm() {
      const algorithmName = this.$route.params.name;

      const algorithms = this.$store.getters.algorithms;

      return algorithms.find(
        (algorithm) => algorithm.resource === algorithmName
      );
    },
  },
};
</script>
