import Vue from "vue";
import Vuex from "vuex";

import content from "@/assets/content.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    content,
    languages: [
      {
        name: "JavaScript",
        extension: "js",
        anchor: "javascript",
        languageClass: "javascript",
        image: require("@/assets/images/logos/javascript.png")
      },
      {
        name: "TypeScript",
        extension: "ts",
        anchor: "typescript",
        languageClass: "typescript",
        image: require("@/assets/images/logos/typescript.png")
      },
      {
        name: "Java",
        extension: "java",
        anchor: "java",
        languageClass: "java",
        image: require("@/assets/images/logos/java.png")
      },
      {
        name: "C#",
        extension: "cs",
        anchor: "c-sharp",
        languageClass: "csharp",
        image: require("@/assets/images/logos/cs.png")
      },
      {
        name: "Python",
        extension: "py",
        anchor: "python",
        languageClass: "python",
        image: require("@/assets/images/logos/python.png")
      }
    ]
  },
  getters: {
    general(state) {
      return state.content.filter(resource => resource.type === "general");
    },
    algorithms(state) {
      return state.content.filter(resource => resource.type === "algorithms");
    },
    sortAlgorithms(_state, getters) {
      return getters.algorithms.filter(algorithm =>
        algorithm.name.toLowerCase().includes("sort")
      );
    },
    searchAlgorithms(_state, getters) {
      return getters.algorithms.filter(algorithm =>
        algorithm.name.toLowerCase().includes("search")
      );
    },
    dataStructures(state) {
      return state.content.filter(
        resource => resource.type === "data-structures"
      );
    }
  }
});

export default store;
