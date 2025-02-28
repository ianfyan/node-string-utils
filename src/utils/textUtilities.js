// Wrap text into a given number of characters per line
export function wrapText(str, maxLength) {
  const words = str.split(" ");
  let line = "";
  let wrapped = "";

  for (let word of words) {
    if ((line + word).length > maxLength) {
      wrapped += line.trim() + "\n";
      line = "";
    }
    line += word + " ";
  }

  return wrapped + line.trim();
}

// Generate a random word from a given list of words
export function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// Convert a number to its ordinal representation (1 -> 1st, 2 -> 2nd)
export function toOrdinal(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const mod10 = number % 10;
  const mod100 = number % 100;
  return number + (suffixes[(mod10 < 4 && mod10 > 0 && (mod100 < 10 || mod100 > 20)) ? mod10 : 0]);
}

// Check if a string is in Title Case
export function isTitleCase(str) {
  return str.split(" ").every((word) => word.charAt(0) === word.charAt(0).toUpperCase());
}
