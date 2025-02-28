import {
  tokenizeWords, tokenizeSentences, tokenizeCharacters 
} from "../src/utils/tokenization.js";

describe("Tokenization Functions", () => {
  describe("tokenizeWords", () => {
    it("should tokenize a string into an array of words", () => {
      expect(tokenizeWords("Hello world! This is a test.")).to.deep.equal(["Hello", "world", "This", "is", "a", "test"]);
    });

    it("should return an empty array for an empty string", () => {
      expect(tokenizeWords(" ")).to.deep.equal([]);
    });
  });

  describe("tokenizeSentences", () => {
    it("should tokenize a string into sentences", () => {
      expect(tokenizeSentences("Hello world! This is a test. Is it working?"))
        .to.deep.equal(["Hello world!", " This is a test.", " Is it working?"]);
    });

    it("should return the original string if no sentence-ending punctuation is found", () => {
      expect(tokenizeSentences("This is a test without punctuation"))
        .to.deep.equal(["This is a test without punctuation"]);
    });
  });

  describe("tokenizeCharacters", () => {
    it("should tokenize a string into an array of characters", () => {
      expect(tokenizeCharacters("Hello"))
        .to.deep.equal(["H", "e", "l", "l", "o"]);
    });

    it("should return an empty array for an empty string", () => {
      expect(tokenizeCharacters(""))
        .to.deep.equal([]);
    });
  });
});
