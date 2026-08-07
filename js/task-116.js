// Find the capitals

// Description:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" -- > [0, 3, 4, 6]

function capitals(word = "") {
  const wordUpperCase = word.toUpperCase();
  let result = [];

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === wordUpperCase[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(capitals("CodEWaRs")); // [0, 3, 4, 6]
console.log(capitals("aAbB")); // [1, 3]
console.log(capitals("AAA")); // [0, 1, 2]
console.log(capitals("")); // []
