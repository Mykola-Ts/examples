// Find the unique string
// Description:
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr = []) {
  const uniqueSymbols = (str = "") =>
    [...new Set(str.toLowerCase().replace(/\s+/g, "").split(""))]
      .sort()
      .join("");

  const patterns = arr.map(uniqueSymbols);
  const uniquePattern = patterns.find(
    (item) => patterns.indexOf(item) === patterns.lastIndexOf(item)
  );

  return arr[patterns.indexOf(uniquePattern)];
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); // 'BbBb'
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // 'foo'
console.log(findUniq(["silvia", "vasili", "victor"])); // "victor"
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
); // "Harry Potter"
console.log(findUniq(["    ", "a", " "])); // "a"
