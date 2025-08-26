// Description:
// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

// Some examples:

// "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.
// The string will never be null and will never be empty.
// words will be separated by a single space character
// the string will have neither leading nor trailing spaces

function sortTheInnerContent(words = "") {
  return words
    .split(" ")
    .map((word) =>
      word.length < 3
        ? word
        : word[0] +
          word
            .slice(1, -1)
            .split("")
            .sort((a, b) => b.localeCompare(a))
            .join("") +
          word[word.length - 1]
    )
    .join(" ");
}

console.log(sortTheInnerContent("sort the inner content in descending order")); // "srot the inner ctonnet in dsnnieedcg oredr"
console.log(sortTheInnerContent("wait for me")); // "wiat for me"
console.log(sortTheInnerContent("this kata is easy")); // "tihs ktaa is esay"

// Method 2

function sortTheInnerContentMethod2(words) {
  return words.replace(/\B\w+(?=\w)/g, (item) =>
    item
      .split("")
      .sort((a, b) => b.localeCompare(a))
      .join("")
  );
}

console.log(
  "Method2",
  sortTheInnerContentMethod2("sort the inner content in descending order")
); // "srot the inner ctonnet in dsnnieedcg oredr"
console.log("Method2", sortTheInnerContentMethod2("wait for me")); // "wiat for me"
console.log("Method2", sortTheInnerContentMethod2("this kata is easy")); // "tihs ktaa is esay"
