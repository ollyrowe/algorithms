<template>
  <div v-if="resource">
    <InfoCard :content="resource.info" />
    <LanguageCard
      v-for="(language, index) of languages"
      :key="index"
      :name="language.name"
      :image="language.image"
      :anchor="language.anchor"
      :language-class="language.languageClass"
      :code="resource[language.extension]"
    />
  </div>
</template>

<script>
import InfoCard from "@/components/cards/InfoCard.vue";
import LanguageCard from "@/components/cards/LanguageCard.vue";

export default {
  name: "General",
  components: { InfoCard, LanguageCard },
  computed: {
    languages() {
      return this.$store.state.languages;
    },
    resource() {
      const resourceName = this.$route.params.name;

      const resources = this.$store.getters.general;

      return resources.find(resource => resource.resource === resourceName);
    }
  }
};
</script>
