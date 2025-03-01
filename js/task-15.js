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
