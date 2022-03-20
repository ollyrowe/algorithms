import _ from "lodash";

const toKebabCase = (text: string): string => {
  return _.kebabCase(text);
};

export default toKebabCase;
