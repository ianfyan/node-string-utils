// Base64 encode a string
export function base64Encode(str) {
  return Buffer.from(str, "utf-8").toString("base64");
}

// Base64 decode a string
export function base64Decode(str) {
  return Buffer.from(str, "base64").toString("utf-8");
}

// URL encode a string
export function urlEncode(str) {
  return encodeURIComponent(str);
}

// URL decode a string
export function urlDecode(str) {
  return decodeURIComponent(str);
}

// ROT13 encode a string (simple letter shifting)
export function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) =>
    String.fromCharCode(
      char.charCodeAt(0) +
        (char.toLowerCase() < "n" ? 13 : -13)
    )
  );
}
