// Description:
// Write a function which will accept a sequence of numbers and calculate the variance for the sequence.

// The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.

// For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

// mean = (1 + 2 + 2 + 3) / 4
// => 2

// variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
// => 0.5
// The results are tested after being rounded to 4 decimal places using Javascript's toFixed method.

function variance(numbers = []) {
  const numbersLength = numbers.length;

  if (!numbersLength) return;

  const mean =
    numbers.reduce((acc, number) => (acc += number), 0) / numbersLength;
  const variance =
    numbers.reduce((acc, number) => (acc += (number - mean) ** 2), 0) /
    numbersLength;

  return Number(variance.toFixed(4));
}

console.log(variance([1, 2, 2, 3])); // 0.5
console.log(variance([-10, 0, 10, 20, 30])); // 200
console.log(variance([8, 9, 10, 11, 12])); // 2
console.log(variance([1.5, 2.5, 4, 2, 1, 1])); // 1.0833
