// Description:
// As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"
// Hint: if you don't know (enough) about numeral systems and radix, just observe the pattern!

function womensAge(n) {
  return `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;
}

console.log(womensAge(32)); // "32? That's just 20, in base 16!"
console.log(womensAge(39)); // "39? That's just 21, in base 19!"
console.log(womensAge(22)); // "22? That's just 21, in base 11!"
console.log(womensAge(65)); // "65? That's just 21, in base 32!"
console.log(womensAge(83)); // "83? That's just 21, in base 41!"

// Method 2
function womensAgeMethod2(n) {
  for (let base = 2; base <= 60; base += 1) {
    if (2 * base === n) {
      return `${n}? That's just 20, in base ${base}!`;
    }
    if (2 * base + 1 === n) {
      return `${n}? That's just 21, in base ${base}!`;
    }
  }
}

console.log("Method2", womensAgeMethod2(32)); // "32? That's just 20, in base 16!"
console.log("Method2", womensAgeMethod2(39)); // "39? That's just 21, in base 19!"
console.log("Method2", womensAgeMethod2(22)); // "22? That's just 21, in base 11!"
console.log("Method2", womensAgeMethod2(65)); // "65? That's just 21, in base 32!"
console.log("Method2", womensAgeMethod2(83)); // "83? That's just 21, in base 41!"
