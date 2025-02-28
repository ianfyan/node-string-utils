// Convert string to camelCase
export function toCamelCase(str) {
  return str
    .replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^([A-Z])/, (m) => m.toLowerCase());
}

// Convert string to snake_case
export function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toLowerCase();
}

// Convert string to kebab-case
export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

// Convert string to PascalCase
export function toPascalCase(str) {
  return str
    .replace(/([-_\s]+(.)?)/g, (_, __, c) => (c ? c.toUpperCase() : ""))
    .replace(/^([a-z])/, (m) => m.toUpperCase());
}

// Convert string to UPPER_SNAKE_CASE
export function toUpperSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/\s+/g, "_")
    .toUpperCase();
}
