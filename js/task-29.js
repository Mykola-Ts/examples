// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(number = 0) {
  const digits = number.toString().split("");
  const digitsLength = digits.length;

  if (digitsLength < 2) return -1;

  let i = digitsLength - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) return -1;

  let j = digitsLength - 1;

  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  return Number(
    digits
      .slice(0, i + 1)
      .concat(digits.slice(i + 1).sort())
      .join("")
  );
}

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
console.log(nextBigger(531)); // -1
console.log(nextBigger(144)); // 414
console.log(nextBigger(1234)); // 1243
console.log(nextBigger(4321)); // -1
console.log(nextBigger(534976)); // 536479
