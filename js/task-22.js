// Description:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(number) {
  const digits = number.toString().split("");

  if (digits.length <= 1) return number;

  const newNumber = digits.reduce((acc, digit) => (acc += Number(digit)), 0);

  return digitalRoot(newNumber);
}

console.log(digitalRoot(1)); // 1
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2

// Method 2 (not recursive)
function digitalRootMethod2(number) {
  return number === 0 ? 0 : number % 9 || 9;
}

console.log("Method2", digitalRootMethod2(1)); // 1
console.log("Method2", digitalRootMethod2(16)); // 7
console.log("Method2", digitalRootMethod2(942)); // 6
console.log("Method2", digitalRootMethod2(132189)); // 6
console.log("Method2", digitalRootMethod2(493193)); // 2
