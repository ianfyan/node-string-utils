import {
  base64Encode,
  base64Decode,
  urlEncode,
  urlDecode,
  rot13,
} from "../src/utils/encoding.js";

describe("Encoding Utilities", () => {
  describe("Base64 Encoding & Decoding", () => {
    it("should encode a string to Base64", () => {
      expect(base64Encode("Hello World")).to.equal("SGVsbG8gV29ybGQ=");
    });

    it("should decode a Base64 string", () => {
      expect(base64Decode("SGVsbG8gV29ybGQ=")).to.equal("Hello World");
    });

    it("should correctly handle empty string encoding", () => {
      expect(base64Encode("")).to.equal("");
    });

    it("should correctly handle empty string decoding", () => {
      expect(base64Decode("")).to.equal("");
    });
  });

  describe("URL Encoding & Decoding", () => {
    it("should encode a string for URLs", () => {
      expect(urlEncode("Hello World")).to.equal("Hello%20World");
    });

    it("should decode a URL-encoded string", () => {
      expect(urlDecode("Hello%20World")).to.equal("Hello World");
    });

    it("should handle reserved characters correctly", () => {
      expect(urlEncode("hello@world.com")).to.equal("hello%40world.com");
      expect(urlDecode("hello%40world.com")).to.equal("hello@world.com");
    });

    it("should correctly handle empty strings", () => {
      expect(urlEncode("")).to.equal("");
      expect(urlDecode("")).to.equal("");
    });
  });

  describe("ROT13 Encoding", () => {
    it("should encode a string using ROT13", () => {
      expect(rot13("Hello")).to.equal("Uryyb");
    });

    it("should encode a full sentence correctly", () => {
      expect(rot13("The quick brown fox")).to.equal("Gur dhvpx oebja sbk");
    });

    it("should decode ROT13-encoded text back to original", () => {
      expect(rot13("Uryyb")).to.equal("Hello");
    });

    it("should leave non-alphabet characters unchanged", () => {
      expect(rot13("Hello, World! 123")).to.equal("Uryyb, Jbeyq! 123");
    });

    it("should correctly handle empty strings", () => {
      expect(rot13("")).to.equal("");
    });
  });
});
