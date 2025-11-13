// KISS - Keep It Simple Stupid

// Description:
// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

// You are the boss of Joe.

// Joe is submitting words to you to publish to a blog. He likes to complicate things.

// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

// If complex:

// return "Keep It Simple Stupid"
// or if it was kept simple:

// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:

// "jump always mostly is touchy dancing choice is pineapples mostly"

function isKiss(words = "") {
  const arrWords = words.split(" ");

  return arrWords.every((word) => word.length <= arrWords.length)
    ? "Good work Joe!"
    : "Keep It Simple Stupid";
}

console.log(isKiss("Joe had a bad day")); // "Good work Joe!"
console.log(isKiss("Joe had some bad days")); // "Good work Joe!"
console.log(isKiss("Joe is having no fun")); // "Keep It Simple Stupid"
console.log(isKiss("Sometimes joe cries for hours")); // "Keep It Simple Stupid"

// Method2
function isKissMethod2(words = "") {
  const arrWords = words.split(" ");

  const largestWordLength = arrWords.reduce(
    (acc, word) => (word.length > acc ? word.length : acc),
    0
  );

  return largestWordLength > arrWords.length
    ? "Keep It Simple Stupid"
    : "Good work Joe!";
}

console.log("Method2", isKissMethod2("Joe had a bad day")); // "Good work Joe!"
console.log("Method2", isKissMethod2("Joe had some bad days")); // "Good work Joe!"
console.log("Method2", isKissMethod2("Joe is having no fun")); // "Keep It Simple Stupid"
console.log("Method2", isKissMethod2("Sometimes joe cries for hours")); // "Keep It Simple Stupid"
