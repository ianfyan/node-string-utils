# node-string-utils 📝

A lightweight and powerful **string utility library** for JavaScript and Node.js, providing **formatting, manipulation, sanitization, analysis, encoding, validation, and tokenization** functions.


## 🚀 Features
- ✅ Convert between different **case formats** (camelCase, snake_case, PascalCase, etc.)
- 🔄 **String manipulations** (reverse, capitalize,  trim, truncate, etc.)
- 🧺 **Sanitize** text (remove special characters, normalize spaces, trim punctuation, convert quotes)
- 📊 **Analyze** text (word count, readability score, sentiment analysis)
- 📂 **Encode and decode** text (Base64, URL encoding, ROT13)
- 🛡️ **Validate** strings (email, URL, phone number, JSON, etc.)
- ✂️ **Tokenize** text into words, sentences, or characters
- 🎲 **Utility functions** (ordinal numbers, random word selection, text wrapping)


## 📦 Installation
Install via **npm**:
```sh
npm install @ianfyan/node-string-utils
```


## 🔧 Usage
Import the package in your project:
```javascript
import { toCamelCase, toSnakeCase, reverseString, wordCount } from "@ianfyan/node-string-utils";

// Convert to camelCase
console.log(toCamelCase("hello world")); // "helloWorld"

// Convert to snake_case
console.log(toSnakeCase("helloWorld")); // "hello_world"

// Reverse a string
console.log(reverseString("hello")); // "olleh"

// Count words
console.log(wordCount("Hello world!")); // 2
```


## 📚 API Reference

### 🏛 **Case Formatters**
| Function         | Description                              | Example |
|-----------------|------------------------------------------|---------|
| `toCamelCase(str)` | Converts to camelCase | `"hello world"` → `"helloWorld"` |
| `toSnakeCase(str)` | Converts to snake_case | `"helloWorld"` → `"hello_world"` |
| `toKebabCase(str)` | Converts to kebab-case | `"hello world"` → `"hello-world"` |
| `toPascalCase(str)` | Converts to PascalCase | `"hello world"` → `"HelloWorld"` |
| `toUpperSnakeCase(str)` | Converts to UPPER_SNAKE_CASE | `"hello world"` → `"HELLO_WORLD"` |

### 🔄 **String Manipulation**
| Function               | Description                              | Example |
|------------------------|------------------------------------------|---------|
| `reverseString(str)`   | Reverses a string | `"hello"` → `"olleh"` |
| `capitalizeWords(str)` | Capitalizes each word | `"hello world"` → `"Hello World"` |
| `trimString(str)`      | Trims whitespace | `" hello "` → `"hello"` |
| `truncateString(str, maxLength)` | Truncates a string and adds "..." if too long | `("hello world", 5)` → `"hello..."` |
| `slugify(str)`         | Converts to URL-friendly slug | `"Hello World!"` → `"hello-world"` |
| `generateRandomString(length)` | Generates a random string | `10` → `"aZ3xY9wLpQ"` |
| `countCharacter(str, char)` | Counts occurrences of a character | `("hello", "l")` → `2` |
| `isAlpha(str)`         | Checks if string contains only letters | `"hello"` → `true` |
| `uncapitalize(str)`    | Converts first letter to lowercase | `"Hello"` → `"hello"` |
| `removeVowels(str)`    | Removes vowels from string | `"hello"` → `"hll"` |
| `wordFrequency(str)`   | Counts occurrences of each word | `"hi hi hello"` → `{ hi: 2, hello: 1 }` |
| `reverseWords(str)`    | Reverses words in a sentence | `"hello world"` → `"world hello"` |
| `toTitleCase(str)`     | Converts to Title Case | `"hello world"` → `"Hello World"` |
| `extractNumbers(str)`  | Extracts numbers from string | `"abc123xyz"` → `[123]` |
| `isEmptyOrWhitespace(str)` | Checks if string is empty/whitespace | `"  "` → `true` |
| `swapCase(str)`        | Swaps case of each letter | `"Hello"` → `"hELLO"` |
| `insertAt(str, subStr, index)` | Inserts substring at index | `("hello", "X", 2)` → `"heXllo"` |
| `removeSubstring(str, subStr)` | Removes all occurrences of substring | `("hello world", "world")` → `"hello "` |
| `shuffleString(str)`   | Randomly shuffles characters | `"hello"` → `"loleh"` |
| `stringToBinary(str)`  | Converts string to binary | `"hi"` → `"01101000 01101001"` |
| `binaryToString(binary)` | Converts binary to string | `"01101000 01101001"` → `"hi"` |
| `toAlternatingCase(str)` | Converts to alternating case | `"hello"` → `"hElLo"` |
| `removeDuplicateCharacters(str)` | Removes duplicate characters | `"hello"` → `"helo"` |
| `longestWord(str)` | Finds longest word in a string | `"hi hello"` → `"hello"` |
| `toHashtag(str)` | Converts string to hashtag format | `"hello world"` → `"#HelloWorld"` |
| `uniqueWords(str)` | Extracts unique words | `"hi hello hi"` → `"hi hello"` |
| `charFrequency(str)` | Counts occurrences of each character | `"hello"` → `{ h:1, e:1, l:2, o:1 }` |

### 🧺 **Text Sanitization**
| Function                | Description                            | Example |
|-------------------------|----------------------------------------|---------|
| `removeNonAlphaNumeric(str)`   | Removes non-alphanumeric characters              | `"Hello@World!"` → `"HelloWorld"`   |
| `normalizeWhitespace(str)`     | Converts multiple spaces into a single space     | `"Hello   World"` → `"Hello World"` |
| `trimPunctuation(str)`         | Removes leading/trailing punctuation             | `"!Hello!"` → `"Hello"`             |
| `toAscii(str)`                 | Converts non-ASCII characters to ASCII equivalent | `"Café"` → `"Cafe"`                 |
| `maskString(str, start, end)`  | Masks part of a string with asterisks            | `("password", 2, -2)` → `"pa****rd"` |
| `isNumeric(str)`               | Checks if a string contains only digits          | `"12345"` → `true`                  |
| `removeDuplicateWords(str)`    | Removes duplicate words from a string            | `"hi hi hello"` → `"hi hello"`      |
| `normalizeDiacritics(str)`     | Normalizes diacritics (é → e, ñ → n)             | `"Café"` → `"Cafe"`                 |
| `removeExtraPunctuation(str)`  | Removes extra punctuation marks                  | `"Hello!!"` → `"Hello!"`            |
| `convertQuotes(str)`           | Converts curly quotes to straight quotes         | `“Hello”` → `"Hello"`               |

### 📊 **Text Analysis**
| Function               | Description                      | Example |
|------------------------|----------------------------------|---------|
| `readabilityScore(str)`  | Computes readability score based on word/sentence length | `"Hello world. This is a test."` → `80.3`  |
| `mostCommonWord(str)`    | Finds the most common word in a string           | `"hi hi hello"` → `"hi"`                      |
| `sentimentAnalysis(str)` | Analyzes sentiment as positive, negative, or neutral | `"I love this!"` → `"positive"`          |

### 📂 **Encoding and Decoding**
| Function              | Description                                      | Example                                        |
| --------------------- | ------------------------------------------------ | ---------------------------------------------- |
| `base64Encode(str)`  | Encodes a string in Base64                      | `base64Encode("Hello")` → `"SGVsbG8="`  |
| `base64Decode(str)`  | Decodes a Base64-encoded string                 | `base64Decode("SGVsbG8=")` → `"Hello"`  |
| `urlEncode(str)`     | Encodes a string for safe use in URLs           | `urlEncode("Hello World!")` → `"Hello%20World%21"`  |
| `urlDecode(str)`     | Decodes a URL-encoded string                    | `urlDecode("Hello%20World%21")` → `"Hello World!"`  |
| `rot13(str)`         | Applies ROT13 cipher to shift letters           | `rot13("Hello")` → `"Uryyb"`  |

### 🛡️ **Validation**
| Function              | Description                                      | Example                                        |
| --------------------- | ------------------------------------------------ | ---------------------------------------------- |
| `isValidEmail(str)`  | Checks if a string is a valid email             | `isValidEmail("test@example.com")` → `true`  |
| `isValidURL(str)`    | Checks if a string is a valid URL               | `isValidURL("https://example.com")` → `true`  |
| `isValidPhoneNumber(str)` | Checks if a string is a valid phone number  | `isValidPhoneNumber("+1234567890")` → `true`  |
| `isAlpha(str)`       | Checks if a string contains only alphabetic characters | `isAlpha("Hello")` → `true` |
| `isAlphanumeric(str)` | Checks if a string contains only alphanumeric characters | `isAlphanumeric("Hello123")` → `true` |
| `isLowercase(str)`   | Checks if a string contains only lowercase letters | `isLowercase("hello")` → `true` |
| `isUppercase(str)`   | Checks if a string contains only uppercase letters | `isUppercase("HELLO")` → `true` |
| `isValidHexColor(str)` | Checks if a string is a valid hexadecimal color code | `isValidHexColor("#ff5733")` → `true` |
| `isValidJSON(str)`   | Checks if a string is a valid JSON              | `isValidJSON('{"key": "value"}')` → `true`  |

### ✂️ **Tokenization**
| Function               | Description                       | Example |
|------------------------|-----------------------------------|---------|
| `tokenizeWords(str)` | Splits into words | `"hello world"` → `["hello", "world"]` |
| `tokenizeSentences(str)` | Splits into sentences | `"Hello! How are you?"` → `["Hello!", "How are you?"]` |
| `tokenizeCharacters(str)` | Splits into characters | `"hi"` → `["h", "i"]` |

### 🎲 **Utilities**
| Function               | Description                        | Example |
|------------------------|------------------------------------|---------|
| `wrapText(str, maxLength)` | Wraps text into lines of a given max length | `wrapText("This is a long text", 10)` → `"This is a\nlong text"` |
| `randomWord(words)`   | Selects a random word from an array              | `randomWord(["apple", "banana", "cherry"])` → `"banana"` |
| `toOrdinal(number)`   | Converts a number to its ordinal representation  | `toOrdinal(21)` → `"21st"`                     |
| `isTitleCase(str)`    | Checks if a string is in Title Case              | `isTitleCase("Hello World")` → `true`         |


## 🛠 Development
Clone the repository:
```sh
git clone https://github.com/ianfyan/node-string-utils.git
cd node-string-utils
npm install
```

### 💚 Run Tests
To test all functions:
```sh
npm test
```


## 📄 License
MIT License - Free to use and modify.

---
With **node-string-utils**, handling strings in **JavaScript & Node.js** is easier than ever! 🚀  
Got feature requests? Feel free to contribute! 🎉

