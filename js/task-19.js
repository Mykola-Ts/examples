// Description:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOddValue(arr = []) {
  const obj = {};

  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  return Number(Object.keys(obj).find((key) => obj[key] % 2)); // +Object.keys(obj).find((key) => obj[key] % 2)
}

console.log(findOddValue([7])); // 7
console.log(findOddValue([0])); // 0
console.log(findOddValue([1, 1, 2])); // 2
console.log(findOddValue([0, 1, 0, 1, 0])); // 0
console.log(findOddValue([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
console.log(
  findOddValue([1, 2, 3, 1, 2, 4, 3, 5, 6, 7, 7, 4, 6, 8, 9, 0, 9, 0, 8])
); // 5

// Method 2
function findOddValueMethod2(arr = []) {
  for (let i = 0; i < arr.length; i += 1) {
    const qtyI = arr.filter((item) => item === arr[i]).length;

    if (qtyI % 2) return arr[i];
  }
}

console.log("Method2", findOddValueMethod2([7])); // 7
console.log("Method2", findOddValueMethod2([0])); // 0
console.log("Method2", findOddValueMethod2([1, 1, 2])); // 2
console.log("Method2", findOddValueMethod2([0, 1, 0, 1, 0])); // 0
console.log(
  "Method2",
  findOddValueMethod2([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
); // 4
console.log(
  "Method2",
  findOddValueMethod2([1, 2, 3, 1, 2, 4, 3, 5, 6, 7, 7, 4, 6, 8, 9, 0, 9, 0, 8])
); // 5

// Method 3
function findOddValueMethod3(arr = []) {
  return arr.reduce((acc, num) => acc ^ num, 0);
}

console.log("Method3", findOddValueMethod3([7])); // 7
console.log("Method3", findOddValueMethod3([0])); // 0
console.log("Method3", findOddValueMethod3([1, 1, 2])); // 2
console.log("Method3", findOddValueMethod3([0, 1, 0, 1, 0])); // 0
console.log(
  "Method3",
  findOddValueMethod3([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
); // 4
console.log(
  "Method3",
  findOddValueMethod3([1, 2, 3, 1, 2, 4, 3, 5, 6, 7, 7, 4, 6, 8, 9, 0, 9, 0, 8])
); // 5
