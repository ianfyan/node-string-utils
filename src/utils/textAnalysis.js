// Get readability score based on word and sentence length (simplified Flesch-Kincaid)
export function readabilityScore(str) {
  const sentences = str.split(/[.!?]/).length;
  const words = str.split(/\s+/).length;
  const syllables = str.match(/[aeiouyAEIOUY]{1,2}/g)?.length || 0;
  return 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
}

// Find the most common word in a string
export function mostCommonWord(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g) || [];
  if (words.length === 0) return "";

  const freq = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b), "");
}

// Determine sentiment (basic positive/negative analysis)
export function sentimentAnalysis(str) {
  const positiveWords = ["good", "happy", "love", "great", "excellent", "amazing"];
  const negativeWords = ["bad", "sad", "angry", "terrible", "horrible", "awful"];
  
  const words = str.toLowerCase().match(/\b\w+\b/g) || [];
  if (words.length === 0) return "neutral";

  const score = words.reduce((acc, word) => {
    if (positiveWords.includes(word)) acc++;
    if (negativeWords.includes(word)) acc--;
    return acc;
  }, 0);

  return score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
}
