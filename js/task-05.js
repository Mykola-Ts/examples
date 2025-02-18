// Завдання
// Написати функцію, яка перевертає переданий рядок.
// За необхідності перетворіть рядок у масив до того, як вносити зміни.
// Результатом функції має бути рядок.

// Спосіб 1
const reverseStrMethod1 = (str) => str.split("").reverse().join("");

console.log(reverseStrMethod1("Hello")); // повинен перетворитися на «olleh»
console.log(reverseStrMethod1("I am the reverse string")); // повинен перетворитися на «ydwoH»
console.log(reverseStrMethod1("Greetings from Earth")); // повинен перетворитися на «htraE morf sgniteerG»

// Спосіб 2
const reverseStrMethod2 = (str) => {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }

  return newStr;
};

console.log("Method2 -", reverseStrMethod2("Greetings from Earth"));

// Спосіб 3
const reverseStrMethod3 = (str) =>
  str === "" ? "" : reverseStrMethod3(str.substr(1)) + str.charAt(0);

console.log("Method3 -", reverseStrMethod3("Greetings from Earth"));
