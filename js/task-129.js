// Screen Time
// Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

// If any single day has 10 hours or more, it's too much.
// If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
// If the average of the seven days is greater than or equal to 6 hours, it's too much.
// Tests:
// Waiting:1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
// Waiting:2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
// Waiting:3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
// Waiting:4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
// Waiting:5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
// Waiting:6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
// Waiting:7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.

function tooMuchScreenTime(hours = []) {
  return !(
    hours.reduce((acc, i) => (acc += i), 0) / hours.length < 6 &&
    hours.every(
      (i, idx) =>
        i < 10 && (i + (hours[idx + 1] ?? 0) + (hours[idx + 2] ?? 0)) / 3 < 8,
    )
  );
}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])); // false
console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])); // false
console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])); // false
console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])); // true
console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])); // true
console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])); // true
console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])); // true
