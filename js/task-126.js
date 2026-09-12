// Unique Characters
// Given a string, determine if all the characters in the string are unique.

// Uppercase and lowercase letters should be considered different characters.
// Tests:
// Waiting:1. allUnique("abc") should return true.
// Waiting:2. allUnique("aA") should return true.
// Waiting:3. allUnique("QwErTy123!@") should return true.
// Waiting:4. allUnique("~!@#$%^&*()_+") should return true.
// Waiting:5. allUnique("hello") should return false.
// Waiting:6. allUnique("freeCodeCamp") should return false.
// Waiting:7. allUnique("!@#*$%^&*()aA") should return false.

function allUnique(str = "") {
  return str.split("").every((i, idx) => idx === str.indexOf(i));
}

console.log(allUnique("abc")); // true
console.log(allUnique("aA")); // true
console.log(allUnique("QwErTy123!@")); // true
console.log(allUnique("~!@#$%^&*()_+")); // true
console.log(allUnique("hello")); // false
console.log(allUnique("freeCodeCamp")); // false
console.log(allUnique("!@#*$%^&*()aA")); // false
