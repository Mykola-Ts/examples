// PascalCase Method

// Description:
// Write a method (or function, depending on the language) that converts a string to PascalCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "pascal case word" --> "PascalCaseWord"
// Don't forget to rate this kata! Thanks :)

// Note: for historical reasons, the function is named camelCase() or similar in some languages, but it should actually perform conversion to PascalCase.

String.prototype.camelCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

console.log("test case".camelCase()); // "TestCase"
console.log("camel Case method".camelCase()); // "CamelCaseMethod"
console.log("say hello".camelCase()); // "SayHello"
console.log("camel case word".camelCase()); // "CamelCaseWord"
console.log("".camelCase()); // ""
