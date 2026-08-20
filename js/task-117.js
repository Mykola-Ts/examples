// Split by Mask

// Description:
// Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

// Examples:
// |     xs        |  Mask (lengths) |          Output           |
// |---------------|-----------------|---------------------------|
// |  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
// |  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
// Notes:
// The mask only contains strictly positive integers.
// A mask is valid if and only if the sum of the lengths is equal to the length of the string.
//     Otherwise, return None.

function split(string = "", mask = []) {
  let count = 0;
  const result = mask.reduce((acc, i) => {
    acc.push(string.slice(count, count + i));
    count += i;

    return acc;
  }, []);

  return result.join("").length === count && string.length === count
    ? result
    : null;
}

console.log(split("1234567890", [3, 3, 4])); // ["123", "456", "7890"]
console.log(split("codewars", [4, 4])); // ["code", "wars"]
console.log(split("", [])); // []
console.log(split("", [1])); // null
console.log(split("codewars", [4, 4, 4])); // null
