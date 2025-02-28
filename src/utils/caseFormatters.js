// Convert string to camelCase
export function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^([A-Z])/, (m) => m.toLowerCase());
}

// Convert string to snake_case
export function toSnakeCase(str) {
  return str
    .replace(/[\W]+/g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase();
}

// Convert string to kebab-case
export function toKebabCase(str) {
  return str
    .replace(/[\W_]+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

// Convert string to PascalCase
export function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim().split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Convert string to UPPER_SNAKE_CASE
export function toUpperSnakeCase(str) {
  return str
    .replace(/[\W-]+/g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toUpperCase();
}
