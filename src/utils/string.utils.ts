export const camelToKebab = (text: string): string =>
  text.toLowerCase().replace(/ /g, "-");
