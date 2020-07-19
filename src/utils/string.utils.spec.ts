import { sanitiseForDom } from "./string.utils";

describe(`sanitiseForDom`, () => {
  it(`should convert a string without spaces`, () => {
    expect(sanitiseForDom("myString")).toEqual("mystring");
  });

  it(`should convert a string with spaces`, () => {
    expect(sanitiseForDom("my String which I like")).toEqual(
      "my-string-which-i-like"
    );
  });

  it(`should replace special characters with dashes`, () => {
    expect(sanitiseForDom("SE&8s #s")).toEqual("se-8s--s");
  });

  it(`should handle null string input`, () => {
    expect(sanitiseForDom(null)).toEqual("");
  });

  it(`should remove digits from the start of the string`, () => {
    expect(sanitiseForDom("222-Ae")).toEqual("-ae");
  });
});
