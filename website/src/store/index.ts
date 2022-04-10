import Vue from "vue";
import Vuex, { Store } from "vuex";

import content from "@/assets/content.json";
import linesOfCode from "@/assets/linesOfCode.json";

import { State, Getters } from "./types";

Vue.use(Vuex);

const getters: Getters<State> = {
  general(state) {
    return state.content.filter((resource) => resource.type === "general");
  },
  algorithms(state) {
    return state.content.filter((resource) => resource.type === "algorithms");
  },
  sortAlgorithms(_state, getters) {
    return getters.algorithms.filter((algorithm) =>
      algorithm.name.toLowerCase().includes("sort")
    );
  },
  searchAlgorithms(_state, getters) {
    return getters.algorithms.filter((algorithm) =>
      algorithm.name.toLowerCase().includes("search")
    );
  },
  dataStructures(state) {
    return state.content.filter(
      (resource) => resource.type === "data-structures"
    );
  },
};

/**
 * Add getters property typings
 */
interface CustomStore<S> extends Store<S> {
  /* Map of the return types of the getter methods */
  getters: { [Key in keyof Getters<S>]: ReturnType<Getters<S>[Key]> };
}

const store: CustomStore<State> = new Store<State>({
  state: {
    content,
    linesOfCode,
    languages: [
      {
        name: "JavaScript",
        extension: "js",
        anchor: "javascript",
        languageClass: "javascript",
        image: require("@/assets/images/logos/javascript.png"),
      },
      {
        name: "TypeScript",
        extension: "ts",
        anchor: "typescript",
        languageClass: "typescript",
        image: require("@/assets/images/logos/typescript.png"),
      },
      {
        name: "Java",
        extension: "java",
        anchor: "java",
        languageClass: "java",
        image: require("@/assets/images/logos/java.png"),
      },
      {
        name: "C#",
        extension: "cs",
        anchor: "c-sharp",
        languageClass: "csharp",
        image: require("@/assets/images/logos/cs.png"),
      },
      {
        name: "Python",
        extension: "py",
        anchor: "python",
        languageClass: "python",
        image: require("@/assets/images/logos/python.png"),
      },
    ],
  },
  getters,
});

export default store;
