// Anagram Detection

// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram(test = "", original = "") {
  const sortString = (str) =>
    str
      .toLowerCase()
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  return sortString(test) === sortString(original);
}

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
