# StringsUtils 📝

A lightweight and powerful **string utility library** for JavaScript and Node.js, providing **formatting, manipulation, sanitization, analysis, and tokenization** functions.

## 🚀 Features
- ✅ Convert between different **case formats** (camelCase, snake_case, PascalCase, etc.)
- 🔄 **String manipulations** (reverse, capitalize, repeat, etc.)
- 🧺 **Sanitize** text (remove special characters, normalize spaces)
- 💊 **Analyze** text (word count, readability score, sentiment analysis)
- ✂️ **Tokenize** text into words, sentences, or characters
- 🎲 **Utility functions** (ordinal numbers, random word selection, text wrapping)

## 📦 Installation
Install via **npm**:
```sh
npm install ianfyan/stringsutils
```

## 🔧 Usage
Import the package in your project:
```javascript
import { toCamelCase, toSnakeCase, reverseString, wordCount } from "stringsutils";

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
| Function          | Description                              | Example |
|------------------|------------------------------------------|---------|
| `reverseString(str)` | Reverses a string | `"hello"` → `"olleh"` |
| `capitalizeWords(str)` | Capitalizes each word | `"hello world"` → `"Hello World"` |
| `trimString(str)` | Trims whitespace | `" hello "` → `"hello"` |
| `repeatString(str, n)` | Repeats a string `n` times | `"hi", 3` → `"hihihi"` |
| `isPalindrome(str)` | Checks if a string is a palindrome | `"madam"` → `true` |

### 🧺 **Text Sanitization**
| Function                | Description                            | Example |
|-------------------------|----------------------------------------|---------|
| `removeNonAlphaNumeric(str)` | Removes special characters | `"he!!o@w#rld"` → `"heloworld"` |
| `normalizeWhitespace(str)` | Converts multiple spaces into one | `"hello    world"` → `"hello world"` |
| `escapeHTML(str)` | Escapes HTML characters | `"<div>"` → `"&lt;div&gt;"` |
| `unescapeHTML(str)` | Unescapes HTML characters | `"&lt;div&gt;"` → `"<div>"` |

### 📊 **Text Analysis**
| Function               | Description                      | Example |
|------------------------|----------------------------------|---------|
| `wordCount(str)` | Counts words in a string | `"Hello world"` → `2` |
| `mostCommonWord(str)` | Finds the most common word | `"hi hi hello"` → `"hi"` |
| `charFrequency(str)` | Counts character occurrences | `"hello"` → `{h:1, e:1, l:2, o:1}` |
| `readabilityScore(str)` | Estimates readability score | `"Hello world."` → `206.8` |
| `sentimentAnalysis(str)` | Determines sentiment | `"I love this"` → `"positive"` |

### ✂️ **Tokenization**
| Function               | Description                       | Example |
|------------------------|-----------------------------------|---------|
| `tokenizeWords(str)` | Splits into words | `"hello world"` → `["hello", "world"]` |
| `tokenizeSentences(str)` | Splits into sentences | `"Hello! How are you?"` → `["Hello!", "How are you?"]` |
| `tokenizeCharacters(str)` | Splits into characters | `"hi"` → `["h", "i"]` |

### 🎲 **Utilities**
| Function               | Description                        | Example |
|------------------------|------------------------------------|---------|
| `toHashtag(str)` | Converts string to hashtag format | `"hello world"` → `"#HelloWorld"` |
| `longestWord(str)` | Finds longest word in a string | `"hi hello"` → `"hello"` |
| `toOrdinal(n)` | Converts number to ordinal format | `1` → `"1st"`, `2` → `"2nd"` |
| `wrapText(str, n)` | Wraps text at `n` characters | `"hello world", 5` → `"hello\nworld"` |

## 🛠 Development
Clone the repository:
```sh
git clone https://github.com/yourusername/stringsutils.git
cd stringsutils
npm install
```

## 📄 License
MIT License - Free to use and modify.

---
With **StringsUtils**, handling strings in **JavaScript & Node.js** is easier than ever! 🚀  
Got feature requests? Feel free to contribute! 🎉

