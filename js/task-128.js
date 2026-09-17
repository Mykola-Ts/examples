// Word Frequency
// Given a paragraph, return an array of the three most frequently occurring words.

// Words in the paragraph will be separated by spaces.
// Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
// Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
// The returned array should have all lowercase words.
// The returned array should be in descending order with the most frequently occurring word first.
// Tests:
// Waiting:1. getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
// Waiting:2. getWords("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
// Waiting:3. getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].

function getWords(paragraph = "") {
  const words = {};

  paragraph
    .replaceAll(/[,.!]/g, "")
    .toLowerCase()
    .split(" ")
    .forEach((i) => (words[i] = (words[i] || 0) + 1));

  return Object.entries(words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((i) => i[0]);
}

console.log(
  getWords(
    "Coding in Python is fun because coding Python allows for coding in Python easily while coding",
  ),
); // ["coding", "python", "in"]
console.log(getWords("I like coding. I like testing. I love debugging!")); // ["i", "like", "coding"]
console.log(
  getWords(
    "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!",
  ),
); // ["debug", "test", "deploy"]
