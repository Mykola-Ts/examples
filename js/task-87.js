// Counting Duplicates

// Description:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text = "") {
  const countLetters = text
    .toLowerCase()
    .split("")
    .reduce((acc, item) => {
      acc[item] ? (acc[item] += 1) : (acc[item] = 1);

      return acc;
    }, {});

  return Object.values(countLetters).filter((item) => item > 1).length;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2

// Method2
function duplicateCountMethod2(text = "") {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

console.log("Method2", duplicateCountMethod2("")); // 0
console.log("Method2", duplicateCountMethod2("abcde")); // 0
console.log("Method2", duplicateCountMethod2("aabbcde")); // 2
console.log("Method2", duplicateCountMethod2("aabBcde")); // 2
console.log("Method2", duplicateCountMethod2("Indivisibility")); // 1
console.log("Method2", duplicateCountMethod2("Indivisibilities")); // 2
