// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str = "") {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2).padEnd(2, "_"));
  }

  return result;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []

// Method 2
function solutionMethod2(str = "") {
  return str.match(/.{1,2}/g)?.map((item) => item.padEnd(2, "_")) || [];
}

console.log("Method2", solutionMethod2("abcdef")); // ["ab", "cd", "ef"]
console.log("Method2", solutionMethod2("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log("Method2", solutionMethod2("")); // []
