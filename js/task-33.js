// Description:
// Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

// Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
// Remember to also round the final answer to the nearest integer.
// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
// Good luck and may the CODE be with you!

function doMath(string = "") {
  const sortedStr = string
    .split(" ")
    .sort((a, b) =>
      a.replace(/[^a-zA-Z]/g, "").localeCompare(b.replace(/[^a-zA-Z]/g, ""))
    );
  const numbers = sortedStr.map((item) => parseInt(item.replace(/\D/g, "")));

  const result = numbers.reduce((total, number, idx) => {
    if (idx === 0) return number;

    const i = (idx - 1) % 4;

    switch (i) {
      case 0:
        return (total += number);

      case 1:
        return (total -= number);

      case 2:
        return (total *= number);

      case 3:
        return (total /= number);

      default:
        return total;
    }
  }, 0);

  return Math.round(result);
}

console.log(doMath("24z6 1x23 y369 89a 900b")); // 1299
console.log(doMath("24z6 1z23 y369 89z 900b")); // 1414
console.log(doMath("10a 90x 14b 78u 45a 7b 34y")); // 60
