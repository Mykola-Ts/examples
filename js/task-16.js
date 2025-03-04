// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const strLowerCase = string.toLowerCase();

  return [...alphabet].every((letter) => strLowerCase.includes(letter));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false

// Method 2
function isPangramMethod2(string) {
  const letters = new Set(string.toLowerCase().replace(/[^a-z]/g, ""));

  return letters.size === 26;
}

console.log(
  "Method2",
  isPangramMethod2("The quick brown fox jumps over the lazy dog.")
); // true
console.log("Method2", isPangramMethod2("This is not a pangram.")); // false

// Method 3
function isPangramMethod3(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const strLowerCase = string.toLowerCase();

  for (let i = 0; i < alphabet.length; i += 1) {
    if (!strLowerCase.includes(alphabet[i])) {
      return false;
    }
  }

  return true;
}

console.log(
  "Method3",
  isPangramMethod3("The quick brown fox jumps over the lazy dog.")
); // true
console.log("Method3", isPangramMethod3("This is not a pangram.")); // false
