import {
  reverseString,
  capitalizeWords,
  trimString,
  truncateString,
  slugify,
  generateRandomString,
  countCharacter,
  isAlpha,
  uncapitalize,
  removeVowels,
  wordFrequency,
  reverseWords,
  toTitleCase,
  extractNumbers,
  isEmptyOrWhitespace,
  swapCase,
  insertAt,
  removeSubstring,
  shuffleString,
  stringToBinary,
  binaryToString,
  toAlternatingCase,
  removeDuplicateCharacters,
  longestWord,
  toHashtag,
  uniqueWords,
  charFrequency
} from "../src/utils/stringManipulation.js";

describe("String Utility Functions", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).to.equal("olleh");
  });

  it("should capitalize the first letter of each word", () => {
    expect(capitalizeWords("hello world")).to.equal("Hello World");
  });

  it("should trim spaces from both ends", () => {
    expect(trimString("  hello  ")).to.equal("hello");
  });

  it("should truncate a string and add '...'", () => {
    expect(truncateString("Hello world", 5)).to.equal("Hello...");
  });

  it("should convert a string into a slug", () => {
    expect(slugify("Hello World!")).to.equal("hello-world");
  });

  it("should generate a random alphanumeric string of given length", () => {
    expect(generateRandomString(10)).to.have.lengthOf(10);
  });

  it("should count occurrences of a character in a string", () => {
    expect(countCharacter("hello", "l")).to.equal(2);
  });

  it("should check if a string contains only letters", () => {
    expect(isAlpha("hello")).to.be.true;
    expect(isAlpha("hello123")).to.be.false;
  });

  it("should uncapitalize the first letter of a string", () => {
    expect(uncapitalize("Hello")).to.equal("hello");
  });

  it("should remove all vowels from a string", () => {
    expect(removeVowels("hello world")).to.equal("hll wrld");
  });

  it("should count word frequency in a string", () => {
    expect(wordFrequency("hello hello world")).to.deep.equal({ hello: 2, world: 1 });
  });

  it("should reverse words in a sentence", () => {
    expect(reverseWords("hello world")).to.equal("world hello");
  });

  it("should convert a string into title case", () => {
    expect(toTitleCase("hello world")).to.equal("Hello World");
  });

  it("should extract numbers from a string", () => {
    expect(extractNumbers("abc123def456")).to.deep.equal([123, 456]);
  });

  it("should check if a string is empty or contains only whitespace", () => {
    expect(isEmptyOrWhitespace("   ")).to.be.true;
    expect(isEmptyOrWhitespace("hello")).to.be.false;
  });

  it("should swap case of each letter in a string", () => {
    expect(swapCase("Hello World")).to.equal("hELLO wORLD");
  });

  it("should insert a substring at a specific index", () => {
    expect(insertAt("hello", " world", 5)).to.equal("hello world");
  });

  it("should remove a substring from a string", () => {
    expect(removeSubstring("hello world", " world")).to.equal("hello");
  });

  it("should shuffle the characters in a string", () => {
    const original = "hello";
    const shuffled = shuffleString(original);
    expect(shuffled).to.have.lengthOf(original.length);
    expect(shuffled).to.not.equal(original);
  });

  it("should convert a string to binary representation", () => {
    expect(stringToBinary("A")).to.equal("01000001");
  });

  it("should convert binary string back to normal text", () => {
    expect(binaryToString("01000001")).to.equal("A");
  });

  it("should convert a string to alternating case", () => {
    expect(toAlternatingCase("hello world")).to.equal("hElLo wOrLd");
  });

  it("should remove duplicate characters from a string", () => {
    expect(removeDuplicateCharacters("hello")).to.equal("helo");
  });

  it("should find the longest word in a string", () => {
    expect(longestWord("hello wonderful world")).to.equal("wonderful");
  });

  it("should convert a string into a hashtag format", () => {
    expect(toHashtag("hello world")).to.equal("#HelloWorld");
  });

  it("should extract unique words from a string", () => {
    expect(uniqueWords("hello hello world")).to.deep.equal(["hello", "world"]);
  });

  it("should count occurrences of each character in a string", () => {
    expect(charFrequency("hello")).to.deep.equal({ h: 1, e: 1, l: 2, o: 1 });
  });
});
