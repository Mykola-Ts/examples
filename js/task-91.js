// Get the Middle Character

// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" -- > "A"

function getMiddle(s = "") {
  const strLength = s.length;
  const middleIdx = Math.floor(strLength / 2);

  return strLength % 2 ? s[middleIdx] : s[middleIdx - 1] + s[middleIdx];
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"

// Method2
function getMiddleMethod2(s = "") {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

console.log("Method2", getMiddleMethod2("test")); // "es"
console.log("Method2", getMiddleMethod2("testing")); // "t"
console.log("Method2", getMiddleMethod2("middle")); // "dd"
console.log("Method2", getMiddleMethod2("A")); // "A"
