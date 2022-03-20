import { GetterTree } from "vuex";

export interface Resource {
  resource: string;
  name: string;
  type: string;
  info: string;
  js?: string;
  ts?: string;
  java?: string;
  cs?: string;
  py?: string;
}

export interface Language {
  name: string;
  extension: keyof Resource;
  anchor: string;
  languageClass: string;
  image: any;
}

type Getter<S, T> = (
  state: S,
  getters: { [Key in keyof Getters<State>]: ReturnType<Getters<State>[Key]> }
) => T;

export interface Getters<S> extends GetterTree<S, any> {
  general: Getter<S, Resource[]>;
  algorithms: Getter<S, Resource[]>;
  sortAlgorithms: Getter<S, Resource[]>;
  searchAlgorithms: Getter<S, Resource[]>;
  dataStructures: Getter<S, Resource[]>;
}

export interface State {
  content: Resource[];
  languages: Language[];
}
