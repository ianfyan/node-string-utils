import {
  removeNonAlphaNumeric,
  normalizeWhitespace,
  trimPunctuation,
  toAscii,
  maskString,
  isNumeric,
  removeDuplicateWords,
  normalizeDiacritics,
  removeExtraPunctuation,
  convertQuotes,
} from "../src/utils/textSanitizers.js";

describe("String Utility Functions", () => {
  it("should remove non-alphanumeric characters", () => {
    expect(removeNonAlphaNumeric("Hello, World! 123")).to.equal("HelloWorld123");
  });

  it("should normalize whitespace", () => {
    expect(normalizeWhitespace("  Hello    World  ")).to.equal("Hello World");
  });

  it("should trim leading and trailing punctuation", () => {
    expect(trimPunctuation("...Hello World!!!")).to.equal("Hello World");
  });

  it("should convert non-ASCII characters to closest ASCII equivalent", () => {
    expect(toAscii("Café Déjà Vu")).to.equal("Cafe Deja Vu");
  });

  it("should mask part of a string", () => {
    expect(maskString("1234567890", 2, -2)).to.equal("12******90");
  });

  it("should check if a string contains only digits", () => {
    expect(isNumeric("123456"))
      .to.be.a("boolean")
      .that.equals(true);
    expect(isNumeric("12a34"))
      .to.be.a("boolean")
      .that.equals(false);
  });

  it("should remove duplicate words", () => {
    expect(removeDuplicateWords("hello hello world world"))
      .to.equal("hello world");
  });

  it("should normalize diacritics", () => {
    expect(normalizeDiacritics("résumé naïve"))
      .to.equal("resume naive");
  });

  it("should remove extra punctuation marks", () => {
    expect(removeExtraPunctuation("Hello!!! How are you??"))
      .to.equal("Hello! How are you?");
  });

  it("should convert curly quotes to straight quotes", () => {
    expect(convertQuotes("“Hello” ‘World’"))
      .to.equal("\"Hello\" 'World'");
  });
});
