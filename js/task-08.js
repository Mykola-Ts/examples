// Завдання "Фільтр унікальних значень"
// Опис:
// Напиши функцію uniqueValues(arr), яка приймає масив і повертає новий масив, що містить лише унікальні значення.

// Приклад роботи:
// console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));
// // [1, 2, 3, 4, 5]

// console.log(uniqueValues(["apple", "banana", "apple", "orange"]));
// // ["apple", "banana", "orange"]

// Спосіб 1
const uniqueValues = (arr) => [...new Set(arr)];

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "apple",
  "banana",
  "apple",
  "orange",
];

console.log("uniqueFruitsMethod1:", uniqueValues(fruits));

const numbers = [1, 2, 2, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 3, 4, 4, 1, 2, 2, 3, 4];

console.log("uniqueNumbersMethod1:", uniqueValues(numbers));

// Спосіб 2

const uniqueVal = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.indexOf(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log("uniqueFruitsMethod2:", uniqueVal(fruits));

console.log("uniqueNumbersMethod2:", uniqueVal(numbers));
