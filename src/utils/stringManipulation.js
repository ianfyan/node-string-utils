// Reverse a string
export function reverseString(str) {
  return str.split("").reverse().join("");
}

// Capitalize first letter of each word
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Trim spaces from both ends of the string
export function trimString(str) {
  return str.trim();
}

// Truncate a string and add "..." if it exceeds max length
export function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

// Convert a string into a URL-friendly slug
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Generate a random alphanumeric string of given length
export function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
}

// Count occurrences of a character in a string
export function countCharacter(str, char) {
  return str.split(char).length - 1;
}

// Check if a string contains only letters
export function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Convert the first letter of a string to lowercase
export function uncapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// Remove all vowels from a string
export function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

// Count the number of occurrences of each word in a string
export function wordFrequency(str) {
  return str
    .toLowerCase()
    .match(/\b\w+\b/g)
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
}

// Reverse words in a sentence
export function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Convert a string into Title Case (Capitalizing the first letter of each word)
export function toTitleCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Extract numbers from a string
export function extractNumbers(str) {
  return str.match(/\d+/g)?.map(Number) || [];
}

// Check if a string is empty or contains only whitespace
export function isEmptyOrWhitespace(str) {
  return !str.trim().length;
}

// Swap case of each letter in the string
export function swapCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// Insert a substring at a specific index
export function insertAt(str, subStr, index) {
  return str.slice(0, index) + subStr + str.slice(index);
}

// Remove a substring from a string
export function removeSubstring(str, subStr) {
  return str.replace(new RegExp(subStr, "g"), "");
}

// Shuffle the characters in a string
export function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Convert a string to binary representation
export function stringToBinary(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
}

// Convert binary string back to normal text
export function binaryToString(binary) {
  return binary
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

// Convert string to alternating case (HeLLo WoRLd)
export function toAlternatingCase(str) {
  return str
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}

// Remove duplicate characters from a string
export function removeDuplicateCharacters(str) {
  return Array.from(new Set(str)).join("");
}

// Find the longest word in a string
export function longestWord(str) {
  return str
    .match(/\b\w+\b/g)
    .reduce((longest, word) => (word.length > longest.length ? word : longest), "");
}

// Convert a string into a hashtag format (#HelloWorld)
export function toHashtag(str) {
  return (
    "#" +
    str
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
  );
}

// Extract unique words from a string
export function uniqueWords(str) {
  return [...new Set(str.match(/\b\w+\b/g))];
}

// Count occurrences of each character in a string
export function charFrequency(str) {
  return str.split("").reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}
