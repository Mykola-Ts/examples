// Build Tower

// Description:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors = 0) {
  const result = [];
  const maxLength = nFloors * 2 - 1;

  for (let i = 1, j = 1; i <= nFloors; i += 1, j += 2) {
    result.push(
      ""
        .padEnd(j, "*")
        .padStart((maxLength + j) / 2, " ")
        .padEnd(maxLength, " "),
    );
  }

  return result;
}

console.log(towerBuilder(1)); // ["*"]
console.log(towerBuilder(2)); // [" * ","***"]
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(6));
// [
//   ("     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********")
// ]
