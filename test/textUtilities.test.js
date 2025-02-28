import {
  wrapText, randomWord, toOrdinal, isTitleCase
} from "../src/utils/textUtilities.js";

describe("String Utilities", () => {
  describe("wrapText", () => {
    it("should wrap text at the specified length", () => {
      const input = "This is a sample text that should be wrapped.";
      const expected = "This is a\nsample\ntext that\nshould be\nwrapped.";
      expect(wrapText(input, 10)).to.equal(expected);
    });

    it("should not break words if possible", () => {
      const input = "Hello world";
      const expected = "Hello\nworld";
      expect(wrapText(input, 5)).to.equal(expected);
    });

    it("should return the original string if it's shorter than maxLength", () => {
      const input = "Short";
      expect(wrapText(input, 10)).to.equal("Short");
    });
  });

  describe("randomWord", () => {
    it("should return a word from the provided list", () => {
      const words = ["apple", "banana", "cherry"];
      const result = randomWord(words);
      expect(words).to.include(result);
    });

    it("should handle an array with one word", () => {
      expect(randomWord(["single"])).to.equal("single");
    });
  });

  describe("toOrdinal", () => {
    it("should return the correct ordinal representation", () => {
      expect(toOrdinal(1)).to.equal("1st");
      expect(toOrdinal(2)).to.equal("2nd");
      expect(toOrdinal(3)).to.equal("3rd");
      expect(toOrdinal(4)).to.equal("4th");
      expect(toOrdinal(11)).to.equal("11th");
      expect(toOrdinal(21)).to.equal("21st");
      expect(toOrdinal(102)).to.equal("102nd");
    });
  });

  describe("isTitleCase", () => {
    it("should return true for a title case string", () => {
      expect(isTitleCase("Hello World"))
        .to.be.true;
    });

    it("should return false for a non-title case string", () => {
      expect(isTitleCase("hello world"))
        .to.be.false;
    });

    it("should return true for single word capitalized", () => {
      expect(isTitleCase("Title"))
        .to.be.true;
    });
  });
});
