// Description:
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(array = []) {
  const averageCount = Math.round(
    array.reduce((acc, item) => acc + item.length, 0) / array.length
  );

  return array.map((item) => item[0].repeat(averageCount));
}

console.log(averageLength(["u", "y"])); // ['u', 'y']
console.log(averageLength(["aa", "bbb", "cccc"])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(["aa", "bb", "ddd", "eee"])); // ['aaa', 'bbb', 'ddd', 'eee']
console.log(averageLength(["aaa", "bbb", "cccc"])); // [ 'aaa', 'bbb', 'ccc' ]

// Method 2
function averageLengthMethod2(array = []) {
  const averageCount = Math.round(
    array.reduce((acc, item) => acc + item.length, 0) / array.length
  );

  return array.map((item) =>
    item.length > averageCount
      ? item.slice(0, averageCount)
      : item.padEnd(averageCount, item[0])
  );
}

console.log("Method2", averageLengthMethod2(["u", "y"])); // ['u', 'y']
console.log("Method2", averageLengthMethod2(["aa", "bbb", "cccc"])); // ['aaa', 'bbb', 'ccc']
console.log("Method2", averageLengthMethod2(["aa", "bb", "ddd", "eee"])); // ['aaa', 'bbb', 'ddd', 'eee']
console.log("Method2", averageLengthMethod2(["aaa", "bbb", "cccc"])); // [ 'aaa', 'bbb', 'ccc' ]
