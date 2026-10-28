// Credit Card Masker
// Given a string of credit card numbers, return a masked version of it using the following constraints:

// The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
// Replace all numbers, except the last four, with an asterisk (*).
// Leave the remaining characters unchanged.
// For example, given "4012-8888-8888-1881" return "****-****-****-1881".

// Tests:
// Waiting:1. mask("4012-8888-8888-1881") should return "****-****-****-1881".
// Waiting:2. mask("5105 1051 0510 5100") should return "**** **** **** 5100".
// Waiting:3. mask("6011 1111 1111 1117") should return "**** **** **** 1117".
// Waiting:4. mask("2223-0000-4845-0010") should return "****-****-****-0010".

function mask(card = "") {
  const separator = card.includes("-") ? "-" : " ";
  const sets = card.split(separator);

  return sets
    .map((i, idx) => (idx === sets.length - 1 ? i : i.replaceAll(/\d/g, "*")))
    .join(separator);
}

console.log(mask("4012-8888-8888-1881")); // "****-****-****-1881"
console.log(mask("5105 1051 0510 5100")); // "**** **** **** 5100"
console.log(mask("6011 1111 1111 1117")); // "**** **** **** 1117"
console.log(mask("2223-0000-4845-0010")); // "****-****-****-0010"

// Method2
function maskMethod2(card = "") {
  return card.replace(/\d(?=.*\d{4}$)/g, "*");
}

console.log("Method2", maskMethod2("4012-8888-8888-1881")); // "****-****-****-1881"
console.log("Method2", maskMethod2("5105 1051 0510 5100")); // "**** **** **** 5100"
console.log("Method2", maskMethod2("6011 1111 1111 1117")); // "**** **** **** 1117"
console.log("Method2", maskMethod2("2223-0000-4845-0010")); // "****-****-****-0010"
