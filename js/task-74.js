// Product of Largest Pair

// Description:
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

function maxProduct(arr = []) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (const num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return max1 * max2;
}

console.log(maxProduct([2, 1, 5, 0, 4, 3])); // 20
console.log(maxProduct([7, 8, 9])); // 72
console.log(maxProduct([33, 231, 454, 11, 9, 99, 57])); // 104874

// Method2
function maxProductMethod2(arr = []) {
  const sortedArr = arr.sort((a, b) => b - a);

  return sortedArr[0] * sortedArr[1];
}

console.log("Method2", maxProductMethod2([2, 1, 5, 0, 4, 3])); // 20
console.log("Method2", maxProductMethod2([7, 8, 9])); // 72
console.log("Method2", maxProductMethod2([33, 231, 454, 11, 9, 99, 57])); // 104874
