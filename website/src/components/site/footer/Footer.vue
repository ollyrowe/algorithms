<template>
  <footer class="footer">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <FooterCard
              title="Framework"
              icon-class="has-text-primary fab fa-vuejs fa-2x"
            >
              This site is built with <strong>Vue.js</strong>
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Language"
              icon-class="has-text-warning fab fa-js-square fa-2x"
            >
              This site is built with <strong>JavaScript</strong>
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="CSS"
              icon-class="has-text-danger fab fa-css3-alt fa-2x"
            >
              The <strong>Bulma</strong> CSS framework has been used to create
              this site
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Algorithms"
              icon-class="has-text-grey fas fa-cogs fa-2x"
            >
              A total of
              <strong>{{ numberOfAlgorithms }}</strong> algorithms have been
              implemented as part of this project
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Languages"
              icon-class="has-text-primary fas fa-code fa-2x"
            >
              This site demonstrates algorithms in
              <strong>{{ numberOfLanguages }}</strong> different languages
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Code"
              icon-class="has-text-warning fas fa-code-branch fa-2x"
            >
              This project is made up of
              <strong>{{ numberOfLinesOfCode }}</strong> lines of code
            </FooterCard>
          </div>
        </div>
      </div>
    </section>
    <hr />
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

import store from "@/store";

import FooterCard from "../../cards/FooterCard.vue";
export default Vue.extend({
  name: "Footer",
  components: { FooterCard },
  computed: {
    numberOfAlgorithms() {
      return store.getters.algorithms.length;
    },
    numberOfLanguages() {
      return store.state.languages.length;
    },
    numberOfLinesOfCode() {
      return store.state.linesOfCode.summary.total;
    },
  },
});
</script>

<style scoped>
.footer {
  background-color: white;
}
</style>
