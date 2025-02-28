import {
  isValidEmail,
  isValidURL,
  isValidPhoneNumber,
  isAlpha,
  isAlphanumeric,
  isLowercase,
  isUppercase,
  isValidHexColor,
  isValidJSON,
} from "../src/utils/validation.js";

describe("String Validation Functions", () => {
  it("should validate email addresses correctly", () => {
    expect(isValidEmail("test@example.com")).to.be.true;
    expect(isValidEmail("invalid-email")).to.be.false;
  });

  it("should validate URLs correctly", () => {
    expect(isValidURL("https://example.com")).to.be.true;
    expect(isValidURL("ftp://example.com")).to.be.false;
  });

  it("should validate phone numbers correctly", () => {
    expect(isValidPhoneNumber("+1234567890")).to.be.true;
    expect(isValidPhoneNumber("invalid-phone")).to.be.false;
  });

  it("should check if a string contains only alphabetic characters", () => {
    expect(isAlpha("hello")).to.be.true;
    expect(isAlpha("hello123")).to.be.false;
  });

  it("should check if a string contains only alphanumeric characters", () => {
    expect(isAlphanumeric("hello123")).to.be.true;
    expect(isAlphanumeric("hello 123")).to.be.false;
  });

  it("should check if a string contains only lowercase letters", () => {
    expect(isLowercase("hello")).to.be.true;
    expect(isLowercase("Hello")).to.be.false;
  });

  it("should check if a string contains only uppercase letters", () => {
    expect(isUppercase("HELLO")).to.be.true;
    expect(isUppercase("Hello")).to.be.false;
  });

  it("should validate hexadecimal color codes correctly", () => {
    expect(isValidHexColor("#fff")).to.be.true;
    expect(isValidHexColor("#123abc")).to.be.true;
    expect(isValidHexColor("123abc")).to.be.true;
    expect(isValidHexColor("#zzzzzz")).to.be.false;
  });

  it("should validate JSON strings correctly", () => {
    expect(isValidJSON('{"key": "value"}')).to.be.true;
    expect(isValidJSON("invalid-json")).to.be.false;
  });
});
