// Description:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr = []) {
  if (!arr.length) return 0;

  let maxCurrent = 0;
  let maxGlobal = 0;

  for (const number of arr) {
    maxCurrent = Math.max(number, maxCurrent + number);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([1, 2, 3, 4, 5])); // 15
console.log(maxSequence([-1, -2, -3, -4])); // 0
console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -100, 2, 1, -5, 4, 5])); // 9
