const toTitleCase = (string: string) => {
  return string
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
    .join(" ");
};

export default toTitleCase;
