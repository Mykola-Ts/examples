// Find the stray number

// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  return numbers.reduce((acc, b) => acc ^ b, 0);
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([1, 2, 1])); // 2
console.log(stray([2, 1, 1])); // 2

// Method2
function strayMethod2(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  return numbers.filter((i) => i === uniqueNumbers[0]).length === 1
    ? uniqueNumbers[0]
    : uniqueNumbers[1];
}

console.log("Method2", strayMethod2([1, 1, 2])); // 2
console.log("Method2", strayMethod2([1, 2, 1])); // 2
console.log("Method2", strayMethod2([2, 1, 1])); // 2
