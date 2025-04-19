// Description:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(add("1", "1")); // "2"
console.log(add("123", "456")); // "579"
console.log(add("888", "222")); // "1110"
console.log(add("1372", "69")); // "1441"
console.log(add("12", "456")); // "468"
console.log(add("101", "100")); // "201"
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963"

// Method 2 (without using BigInt)
function addMethod2(a = "", b = "") {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const digitA = i >= 0 ? Number(a[i]) : 0;
    const digitB = j >= 0 ? Number(b[j]) : 0;
    const sum = digitA + digitB + carry;

    result = Math.floor(sum % 10) + result;
    carry = Math.floor(sum / 10);
    i -= 1;
    j -= 1;
  }

  return result;
}

console.log("Method2", addMethod2("1", "1")); // "2"
console.log("Method2", addMethod2("123", "456")); // "579"
console.log("Method2", addMethod2("888", "222")); // "1110"
console.log("Method2", addMethod2("1372", "69")); // "1441"
console.log("Method2", addMethod2("12", "456")); // "468"
console.log("Method2", addMethod2("101", "100")); // "201"
console.log(
  "Method2",
  addMethod2("63829983432984289347293874", "90938498237058927340892374089")
); // "91002328220491911630239667963"
