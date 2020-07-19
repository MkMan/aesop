import { camelToKebab } from "./string.utils";

describe(`camelToKebab`, () => {
  it(`should convert a string without spaces`, () => {
    expect(camelToKebab("myString")).toEqual("mystring");
  });

  it(`should convert a string with spaces`, () => {
    expect(camelToKebab("my String which I like")).toEqual(
      "my-string-which-i-like"
    );
  });
  it(`should replace special characters with dashes`, () => {
    expect(camelToKebab("SE&8s #s")).toEqual("se-8s--s");
  });
});
