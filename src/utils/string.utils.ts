/**
 * Returns a lower case version of text
 * where spaces and non alphanumeric characters are replaced with a dash
 * @param  {string} text
 * @returns string
 */
export const camelToKebab = (text: string): string =>
  text.toLowerCase().replace(/( )|(\W)/g, "-");
