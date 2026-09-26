// Array Diff
// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

// The returned array should be sorted in alphabetical order.
// Tests:
// Waiting:1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
// Waiting:2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
// Waiting:3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
// Waiting:4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
// Waiting:5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].

function arrayDiff(arr1 = [], arr2 = []) {
  const uniqueItems = [...new Set([...arr1, ...arr2])];

  return uniqueItems
    .filter((i) => !(arr1.includes(i) && arr2.includes(i)))
    .sort((a, b) => a.localeCompare(b));
}

console.log(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])); // ["cherry"]
console.log(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])); // ["cherry"]
console.log(
  arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]),
); // ["eight", "four", "six", "two"]
console.log(
  arrayDiff(
    ["two", "four", "five", "eight"],
    ["one", "two", "three", "four", "seven", "eight"],
  ),
); // ["five", "one", "seven", "three"]
console.log(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])); // ["freeCodeCamp", "rocks"]
