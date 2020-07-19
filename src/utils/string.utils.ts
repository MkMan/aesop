/**
 * Returns a lower case version of text, removing numbers at the start and
 * replacing spaces and non alphanumeric characters are with dashes
 * @param  {string} text
 * @returns string
 */
export const sanitiseForDom = (text?: string | null): string => {
  text = text ?? "";
  return text
    .toLowerCase()
    .replace(/^\d*/, "")
    .replace(/( )|(\W)/g, "-");
};
