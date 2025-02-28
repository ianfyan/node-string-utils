import {
  readabilityScore,
  mostCommonWord,
  sentimentAnalysis,
} from "../src/utils/textAnalysis.js";

describe("Text Analysis Functions", () => {
  describe("readabilityScore", () => {
    it("should calculate the readability score correctly", () => {
      const text = "This is a simple sentence. It has a readability score.";
      const score = readabilityScore(text);
      expect(score).to.be.a("number");
    });

    it("should return a lower score for more complex sentences", () => {
      const simpleText = "This is an easy text.";
      const complexText =
        "Consequently, the establishment of standardized methodologies significantly enhances comprehension.";
      expect(readabilityScore(simpleText)).to.be.greaterThan(
        readabilityScore(complexText)
      );
    });

    it("should handle empty strings gracefully", () => {
      expect(readabilityScore("")).to.be.a("number");
    });
  });

  describe("mostCommonWord", () => {
    it("should find the most common word in a string", () => {
      const text = "apple banana apple orange banana apple";
      expect(mostCommonWord(text)).to.equal("apple");
    });

    it("should be case insensitive", () => {
      const text = "Hello hello HELLO world";
      expect(mostCommonWord(text)).to.equal("hello");
    });

    it("should return an empty string for empty input", () => {
      expect(mostCommonWord("")).to.equal("");
    });
  });

  describe("sentimentAnalysis", () => {
    it("should return 'positive' for positive sentences", () => {
      expect(sentimentAnalysis("I love this amazing product!")).to.equal(
        "positive"
      );
    });

    it("should return 'negative' for negative sentences", () => {
      expect(sentimentAnalysis("This is a terrible and awful experience.")).to.equal(
        "negative"
      );
    });

    it("should return 'neutral' for neutral sentences", () => {
      expect(sentimentAnalysis("This is a book on the table.")).to.equal(
        "neutral"
      );
    });

    it("should be case insensitive", () => {
      expect(sentimentAnalysis("This is AMAZING and GOOD")).to.equal(
        "positive"
      );
    });

    it("should return 'neutral' for empty input", () => {
      expect(sentimentAnalysis("")).to.equal("neutral");
    });
  });
});
