// Description: // Given an array of integers. // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. // If the input is an empty array or is null, return an empty array. // Example // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input = []) {
  if (!input || !input.length) return [];

  const result = input.reduce(
    (acc, i) => {
      if (i > 0) acc[0] += 1;
      else if (i < 0) acc[1] += i;

      return acc;
    },
    [0, 0]
  );

  return result[0] || result[1] ? result : [];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]
console.log(countPositivesSumNegatives([+0, +0])); // []
