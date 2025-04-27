// Description:
// Complete the function that returns the color of the given square on a normal, 8x8 chess board:

// Examples
// "a", 8  ==>  "white"
// "b", 2  ==>  "black"
// "f", 5  ==>  "white"

function mineColor(file, rank) {
  const oddWhite = ["b", "d", "f", "h"];
  const evenWhite = ["a", "c", "e", "g"];

  if (oddWhite.includes(file)) {
    return rank % 2 ? "white" : "black";
  } else if (evenWhite.includes(file)) {
    return rank % 2 ? "black" : "white";
  }
}

console.log(mineColor("a", 8)); // "white"
console.log(mineColor("b", 2)); // "black"
console.log(mineColor("f", 5)); // "white"

// Method 2
function mineColorMethod2(file = "", rank = 0) {
  return (file.charCodeAt(0) - 97 + rank) % 2 ? "black" : "white";
}

console.log("Method2", mineColorMethod2("a", 8)); // "white"
console.log("Method2", mineColorMethod2("b", 2)); // "black"
console.log("Method2", mineColorMethod2("f", 5)); // "white"
