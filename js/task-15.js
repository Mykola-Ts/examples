// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function hasEqualXO(str) {
  const letters = str.toLowerCase().split("");
  const qtyX = letters.filter((letter) => letter === "x").length;
  const qtyO = letters.filter((letter) => letter === "o").length;

  return qtyX === qtyO;
}

console.log(hasEqualXO("ooxx")); // true
console.log(hasEqualXO("xooxx")); // false
console.log(hasEqualXO("ooxXm")); // true
console.log(hasEqualXO("zpzpzpp")); // true
console.log(hasEqualXO("zzoo")); // false

// Method2
function hasEqualXOMethod2(str) {
  const strLowerCase = str.toLowerCase();

  return strLowerCase.split("x").length === strLowerCase.split("o").length;
}

console.log("Method2", hasEqualXOMethod2("ooxx")); // true
console.log("Method2", hasEqualXOMethod2("xooxx")); // false
console.log("Method2", hasEqualXOMethod2("ooxXm")); // true
console.log("Method2", hasEqualXOMethod2("zpzpzpp")); // true
console.log("Method2", hasEqualXOMethod2("zzoo")); // false
console.log("Method2", hasEqualXOMethod2("xppoOxpXpxo")); // false
console.log("Method2", hasEqualXOMethod2("xxmomom")); // true

// Method 3
function hasEqualXOMethod3(str) {
  return (
    (str.match(/[x]/gi) || []).length === (str.match(/[o]/gi) || []).length
  );
}

console.log("Method3", hasEqualXOMethod3("ooxx")); // true
console.log("Method3", hasEqualXOMethod3("xooxx")); // false
console.log("Method3", hasEqualXOMethod3("ooxXm")); // true
console.log("Method3", hasEqualXOMethod3("zpzpzpp")); // true
console.log("Method3", hasEqualXOMethod3("zzoo")); // false

// Task Description
// Implement a function that checks whether a given string contains the same number of two specified letters. The function should be case insensitive and return a boolean value.

function hasEqualLetterCount({ str, firstLetter, secondLetter }) {
  const letters = str.toLowerCase().split("");
  const firstLetterLowerCase = firstLetter.toLowerCase();
  const secondLetterLowerCase = secondLetter.toLowerCase();
  const qtyFirstLetter = letters.filter(
    (letter) => letter === firstLetterLowerCase
  ).length;
  const qtySecondLetter = letters.filter(
    (letter) => letter === secondLetterLowerCase
  ).length;

  return qtyFirstLetter === qtySecondLetter;
}

console.log(
  hasEqualLetterCount({ str: "aabb", firstLetter: "a", secondLetter: "b" })
); // true
console.log(
  hasEqualLetterCount({ str: "aaabb", firstLetter: "a", secondLetter: "b" })
); // false
console.log(
  hasEqualLetterCount({
    str: "HelloWorld",
    firstLetter: "l",
    secondLetter: "o",
  })
); // false
console.log(
  hasEqualLetterCount({ str: "TestCase", firstLetter: "t", secondLetter: "s" })
); // true
console.log(
  hasEqualLetterCount({
    str: "Mississippi",
    firstLetter: "s",
    secondLetter: "p",
  })
); // false

// Method 2
function hasEqualLetterCountMethod2({ str, firstLetter, secondLetter }) {
  const firstLetterPattern = new RegExp(firstLetter, "gi");
  const secondLetterPattern = new RegExp(secondLetter, "gi");

  return (
    (str.match(firstLetterPattern) || []).length ===
    (str.match(secondLetterPattern) || []).length
  );
}

console.log(
  "Method2",
  hasEqualLetterCountMethod2({
    str: "aabb",
    firstLetter: "a",
    secondLetter: "b",
  })
); // true
console.log(
  "Method2",
  hasEqualLetterCountMethod2({
    str: "aaabb",
    firstLetter: "a",
    secondLetter: "b",
  })
); // false
console.log(
  "Method2",
  hasEqualLetterCountMethod2({
    str: "HelloWorld",
    firstLetter: "l",
    secondLetter: "o",
  })
); // false
console.log(
  "Method2",
  hasEqualLetterCountMethod2({
    str: "TestCase",
    firstLetter: "t",
    secondLetter: "s",
  })
); // true
console.log(
  "Method2",
  hasEqualLetterCountMethod2({
    str: "Mississippi",
    firstLetter: "s",
    secondLetter: "p",
  })
); // false
