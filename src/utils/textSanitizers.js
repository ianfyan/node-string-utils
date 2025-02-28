// Remove non-alphanumeric characters from a string
export function removeNonAlphaNumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

// Convert multiple spaces into a single space
export function normalizeWhitespace(str) {
  return str.replace(/\s+/g, " ").trim();
}

// Remove leading and trailing punctuation
export function trimPunctuation(str) {
  return str.replace(/^\p{P}+|\p{P}+$/gu, "");
}

// Convert non-ASCII characters to their closest ASCII equivalent
export function toAscii(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Mask part of a string with asterisks (e.g., credit card numbers, email usernames)
export function maskString(str, start = 2, end = -2, maskChar = "*") {
  if (str.length < start + Math.abs(end)) return str;
  return (
    str.slice(0, start) +
    maskChar.repeat(str.length - (start + Math.abs(end))) +
    str.slice(end)
  );
}

// Check if a string contains only digits
export function isNumeric(str) {
  return /^\d+$/.test(str);
}

// Remove duplicate words in a string
export function removeDuplicateWords(str) {
  return [...new Set(str.split(" "))].join(" ");
}

// Normalize string by removing diacritics (é -> e, ñ -> n)
export function normalizeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Remove extra punctuation marks
export function removeExtraPunctuation(str) {
  return str.replace(/([.,!?])\1+/g, "$1");
}

// Convert curly quotes to straight quotes
export function convertQuotes(str) {
  return str
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");
}
