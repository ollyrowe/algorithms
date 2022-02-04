<template>
  <footer class="footer">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third">
            <FooterCard
              title="Framework"
              iconClass="has-text-primary fab fa-vuejs fa-2x"
            >
              This site is built with <strong>Vue.js</strong>
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Language"
              iconClass="has-text-warning fab fa-js-square fa-2x"
            >
              This site is built with <strong>JavaScript</strong>
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="CSS"
              iconClass="has-text-danger fab fa-css3-alt fa-2x"
            >
              The <strong>Bulma</strong> CSS framework has been used to create
              this site
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Algorithms"
              iconClass="has-text-grey fas fa-cogs fa-2x"
            >
              A total of
              <strong>{{ numberOfAlgorithms }}</strong> algorithms have been
              implemented as part of this project
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Languages"
              iconClass="has-text-primary fas fa-code fa-2x"
            >
              This site demonstrates algorithms in
              <strong>{{ numberOfLanguages }}</strong> different languages
            </FooterCard>
          </div>
          <div class="column is-one-third">
            <FooterCard
              title="Code"
              iconClass="has-text-warning fas fa-code-branch fa-2x"
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

<script>
import FooterCard from "../../cards/FooterCard.vue";
export default {
  components: { FooterCard },
  name: "Footer",
  computed: {
    numberOfAlgorithms() {
      return this.$store.getters.algorithms.length;
    },
    numberOfLanguages() {
      return this.$store.state.languages.length;
    },
    numberOfLinesOfCode() {
      return "WIP";
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: white;
}
</style>
