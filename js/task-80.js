// Create Phone Number

// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

//     Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers = []) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");

  return numbers.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"

// Method2
function createPhoneNumberMethod2(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log(
  "Method2",
  createPhoneNumberMethod2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
); // "(123) 456-7890"
console.log(
  "Method2",
  createPhoneNumberMethod2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
); // "(111) 111-1111"
