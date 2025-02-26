// Завдання "Анаграми"
// Опис:
// Створи функцію, яка приймає два рядки та перевіряє, чи є вони анаграмами (тобто складаються з однакових літер у різному порядку).

// Приклад роботи:
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));  // false

// Спосіб 1
function isAnagramMethod1(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log("isAnagramMethod1", isAnagramMethod1("listen", "silent"));
console.log("isAnagramMethod1", isAnagramMethod1("hello", "world"));

// Спосіб 2
function isAnagramMethod2(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char] -= 1;
  }

  return true;
}

console.log("isAnagramMethod2", isAnagramMethod2("listen", "silent"));
console.log("isAnagramMethod2", isAnagramMethod2("hello", "world"));
