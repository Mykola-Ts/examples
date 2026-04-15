// Description:
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(3)); // 27
console.log(rowSumOddNumbers(42)); // 74088

// Method 2

function rowSumOddNumbersMethod2(n) {
  let num = n * (n - 1) + 1;
  let result = num;

  for (let i = 1; i < n; i += 1) {
    num += 2;
    result += num;
  }

  return result;
}

console.log("Method2", rowSumOddNumbersMethod2(1)); // 1
console.log("Method2", rowSumOddNumbersMethod2(2)); // 8
console.log("Method2", rowSumOddNumbersMethod2(3)); // 27
console.log("Method2", rowSumOddNumbersMethod2(42)); // 74088
