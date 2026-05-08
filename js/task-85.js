// Multiples of 3 or 5

// Description:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.

function solution(number = 0) {
  if (number < 0) return 0;

  let result = 0;

  for (let i = 1; i < number; i += 1) {
    if (!(i % 3) || !(i % 5)) {
      result += i;
    }
  }

  return result;
}

console.log(solution(10)); // 23
