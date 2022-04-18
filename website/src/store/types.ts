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

interface LinesOfCodeSummary {
  total: number;
  source: number;
  comment: number;
  single: number;
  block: number;
  mixed: number;
  empty: number;
  todo: number;
  blockEmpty: number;
}

interface FileSummary {
  path: string;
  stats: LinesOfCodeSummary;
  badFile: boolean;
}

export interface LinesOfCode {
  files: FileSummary[];
  summary: LinesOfCodeSummary;
  byExt: {
    [extension: string]: { files: FileSummary[]; summary: LinesOfCodeSummary };
  };
}

export interface Language {
  name: string;
  extension: keyof Resource;
  anchor: string;
  /* The Prism language class */
  languageClass: string;
  image: any;
}

export interface LanguageInfo {
  language: Language;
  code?: string;
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
  linesOfCode: LinesOfCode;
  languages: Language[];
}
