// Tokenize a string into an array of words
export function tokenizeWords(str) {
  return str.match(/\b\w+\b/g) || [];
}

// Tokenize a string into sentences
export function tokenizeSentences(str) {
  return str.match(/[^.!?]+[.!?]+/g) || [str];
}

// Tokenize a string into characters
export function tokenizeCharacters(str) {
  return str.split("");
}
