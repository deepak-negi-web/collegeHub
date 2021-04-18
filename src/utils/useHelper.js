export const stringCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getCourseAbbreviation = (string = "") => {
  let abbreviation = string;
  const matches = string.match(/\(([^)]+)\)/);
  if (matches) {
    abbreviation = matches[1];
  }
  return abbreviation;
};
