// Sum of Array Averages

// Description:
// Program a function that takes in an array of arrays of numbers and returns the sum of the averages of the arrays.

// Example
// [
//   [3, 4, 1, 3, 5, 1, 4], #  (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 =  3
//   [21, 54, 33, 21, 77]   # (21 + 54 + 33 + 21 + 77)     / 5 = 41.2
// ]
// result: 3 + 41.2 = 44.2

function sumAverage(arrays = []) {
  return arrays.reduce(
    (sum, numbers) =>
      (sum +=
        numbers.reduce((acc, number) => (acc += number), 0) / numbers.length),
    0,
  );
}

console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ]),
); // 44.2
console.log(
  sumAverage([
    [1, 2, 2, 1],
    [2, 2, 2, 1],
  ]),
); // 3.25
console.log(
  sumAverage([
    [52, 64, 84, 21, 54],
    [44, 87, 46, 90, 43],
  ]),
); // 117.0
console.log(
  sumAverage([
    [44, 76, 12],
    [96, 12, 34, 53, 76, 34, 56, 86, 21],
    [34, 65, 34, 76, 34, 87, 34],
  ]),
); // 148.0
console.log(
  sumAverage([
    [
      41, 16, 99, 93, 59, 18, 35, 23, 55, 45, 38, 39, 74, 60, 95, 44, 59, 70,
      44, 89, 90, 19, 23, 67, 65, 66, 41, 89, 49, 22, 23, 47, 60, 12, 59, 58,
      25, 69, 66, 82, 53, 41, 51, 69, 78, 18, 17, 44, 74, 96, 46, 73, 22, 37,
      95, 32, 62, 49, 8, 88, 59, 66, 23, 10, 61, 28, 11, 99, 27, 98, 8, 18, 73,
      18, 61, 25, 60, 38, 81, 13, 36, 63, 12, 83, 57, 11, 19, 51, 41, 20, 37,
      63, 79, 94, 25, 45, 24, 73, 67, 42,
    ],
  ]),
); // 50.0
console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 76],
  ]),
); // 44.0
console.log(
  sumAverage([
    [-4, 3, -8, -2],
    [2, 9, 1, -5],
    [-7, -2, -6, -4],
  ]),
); // -5.75
