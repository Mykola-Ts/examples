// Завдання
// Потрібно за заданим рядком замінити кожну літеру на її позицію в алфавіті.

// Якщо в тексті є щось, що не є літерою, ігноруйте це і не повертайте.

// "a" = 1, "b" = 2, etc.

// Приклад роботи:
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetPosition(text = "") {
  return text
    .split("")
    .map((letter) => {
      const idx = alphabet.indexOf(letter.toLowerCase());

      return idx !== -1 ? idx + 1 : "";
    })
    .filter((item) => item)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// Спосіб 2
function alphabetPositionMethod2(text = "") {
  return text
    .toLowerCase()
    .split("")
    .map((letter) => letter.charCodeAt(0) - 96)
    .filter((item) => item > 0 && item <= 26)
    .join(" ");
}

console.log(
  "Method2",
  alphabetPositionMethod2("The sunset sets at twelve o' clock.")
);
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
