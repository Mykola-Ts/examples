// Description:

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text = "", markers = []) {
  return text
    .split("\n")
    .map((line) => {
      for (let marker of markers) {
        const idx = line.indexOf(marker);

        if (!!~idx) {
          line = line.slice(0, idx);
        }
      }

      return line.trimEnd();
    })
    .join("\n");
}

console.log(solution("apples, pears # and bananas", ["#", "!"])); // apples, pears
console.log(solution("grapes", ["#", "!"])); // grapes
console.log(solution("bananas !apples", ["#", "!"])); // bananas
console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
); // apples, pears\ngrapes\nbananas

// Method 2
function solutionMethod2(text = "", markers = []) {
  return text
    .split("\n")
    .map((str) =>
      markers.reduce((string, marker) => string.split(marker)[0], str).trimEnd()
    )
    .join("\n");
}

console.log(
  "Method2",
  solutionMethod2("apples, pears # and bananas", ["#", "!"])
); // apples, pears
console.log("Method2", solutionMethod2("grapes", ["#", "!"])); // grapes
console.log("Method2", solutionMethod2("bananas !apples", ["#", "!"])); // bananas
console.log(
  "Method2",
  solutionMethod2("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
  ])
); // apples, pears\ngrapes\nbananas

// Method 3
function solutionMethod3(text = "", markers = []) {
  const regex = new RegExp(
    `[${markers.map((m) => "\\" + m).join("")}].*$`,
    "gm"
  );

  return text.replaceAll(regex, "").replaceAll(/ +$/gm, "");
}

console.log(
  "Method3",
  solutionMethod3("apples, pears # and bananas", ["#", "!"])
); // apples, pears
console.log("Method3", solutionMethod3("grapes", ["#", "!"])); // grapes
console.log("Method3", solutionMethod3("bananas !apples", ["#", "!"])); // bananas
console.log(
  "Method3",
  solutionMethod3("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
  ])
); // apples, pears\ngrapes\nbananas
