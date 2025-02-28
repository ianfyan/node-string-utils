import {
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  toPascalCase,
  toUpperSnakeCase,
} from "../src/utils/caseFormatters.js";

describe("Case Formatters", () => {
  it("should convert to camelCase", () => {
    expect(toCamelCase("hello world")).to.equal("helloWorld");
    expect(toCamelCase("Hello-World")) .to.equal("helloWorld");
    expect(toCamelCase("hello_world")) .to.equal("helloWorld");
  });

  it("should convert to snake_case", () => {
    expect(toSnakeCase("hello world")).to.equal("hello_world");
    expect(toSnakeCase("HelloWorld")).to.equal("hello_world");
    expect(toSnakeCase("hello-world")).to.equal("hello_world");
  });

  it("should convert to kebab-case", () => {
    expect(toKebabCase("hello world")).to.equal("hello-world");
    expect(toKebabCase("HelloWorld")).to.equal("hello-world");
    expect(toKebabCase("hello_world")).to.equal("hello-world");
  });

  it("should convert to PascalCase", () => {
    expect(toPascalCase("hello world")).to.equal("HelloWorld");
    expect(toPascalCase("hello-world")).to.equal("HelloWorld");
    expect(toPascalCase("hello_world")).to.equal("HelloWorld");
  });

  it("should convert to UPPER_SNAKE_CASE", () => {
    expect(toUpperSnakeCase("hello world")).to.equal("HELLO_WORLD");
    expect(toUpperSnakeCase("HelloWorld")).to.equal("HELLO_WORLD");
    expect(toUpperSnakeCase("hello-world")).to.equal("HELLO_WORLD");
  });
});
