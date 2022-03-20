const toTitleCase = (string: string): string => {
  return string
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase())
    .join(" ");
};

export default toTitleCase;
