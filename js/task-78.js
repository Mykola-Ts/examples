// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(str = "", ending = "") {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
console.log(solution("empty ending", "")); // true
console.log(solution("", "empty string")); // false
console.log(solution("", "")); // true

// Method 2
function solutionMethod2(str = "", ending = "") {
  const strEnding = str.slice(-1 * ending.length);

  return ending !== "" ? strEnding === ending : true;
}

console.log("Method2", solutionMethod2("abcde", "cde")); // true
console.log("Method2", solutionMethod2("abcde", "abc")); // false
console.log("Method2", solutionMethod2("empty ending", "")); // true
console.log("Method2", solutionMethod2("", "empty string")); // false
console.log("Method2", solutionMethod2("", "")); // true
