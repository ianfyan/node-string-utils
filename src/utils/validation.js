// Check if a string is a valid email
export function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// Check if a string is a valid URL
export function isValidURL(str) {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(str);
}

// Check if a string is a valid phone number (basic format)
export function isValidPhoneNumber(str) {
  return /^\+?[0-9\s()-]+$/.test(str);
}

// Check if a string contains only alphabetic characters
export function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Check if a string contains only alphanumeric characters
export function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

// Check if a string contains only lowercase letters
export function isLowercase(str) {
  return /^[a-z]+$/.test(str);
}

// Check if a string contains only uppercase letters
export function isUppercase(str) {
  return /^[A-Z]+$/.test(str);
}

// Check if a string is a valid hexadecimal color code
export function isValidHexColor(str) {
  return /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(str);
}

// Check if a string is a valid JSON
export function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
