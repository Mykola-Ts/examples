// Description:
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -- > "5"

function lottery(str = "") {
  const integers = str.replace(/\D/g, "");

  if (!integers) return "One more run!";

  const uniqueIntegers = new Set(integers);

  return [...uniqueIntegers].join("");
}

console.log(lottery("hPrBKWDH8yc6Lt5NQZWQ")); // "865"
console.log(lottery("ynMAisVpHEqpqHBqTrwH")); // "One more run!"
console.log(lottery("555")); // "5"

// Method 2
function lotteryMethod2(str = "") {
  const integers = str.match(/\d/g);

  return integers ? [...new Set(integers)].join("") : "One more run!";
}

console.log("Method2", lotteryMethod2("hPrBKWDH8yc6Lt5NQZWQ")); // "865"
console.log("Method2", lotteryMethod2("ynMAisVpHEqpqHBqTrwH")); // "One more run!"
console.log("Method2", lotteryMethod2("555")); // "5"
