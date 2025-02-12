"use strict";

// Написати скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = [
  "pyton",
  "javascrypt",
  "c++",
  "haskel",
  "php",
  "ruby",
  "c++",
  "c#",
  "nodejs",
  "reactjs",
  "javascrypt",
];

// Сортування за допомогою методу sort()
const exmResult = [...langs].sort((a, b) => a.localeCompare(b));

console.log("exmResult", exmResult);

// Спосіб 1 (повертає новий відсортований масив)
const langsCopy = [...langs];
const resultMethod1 = [];

for (let i = 0; i < langsCopy.length; i += 1) {
  let max = langsCopy[i];
  let idxMax = i;

  for (let j = i + 1; j < langsCopy.length; j += 1) {
    if (max > langsCopy[j]) {
      max = langsCopy[j];
      idxMax = j;
    }
  }

  langsCopy.splice(idxMax, 1);

  if (max !== langsCopy[i]) langsCopy.push(langsCopy[i]);

  resultMethod1.push(max);
}

console.log("resultMethod1", resultMethod1);

// Спосіб 2 (здійснює сортування початкового масиву)

for (let i = 0; i < langs.length - 1; i += 1) {
  for (let j = i + 1; j < langs.length; j += 1) {
    if (langs[i] > langs[j]) {
      let temp = langs[i];
      langs[i] = langs[j];
      langs[j] = temp;
    }
  }
}

console.log("resultMethod2", langs);

// Спосіб 3 (повертає новий відсортований масив)

const resultMethod3 = [];

for (let i = 0; i < langs.length; i += 1) {
  let addResult = false;

  for (let j = 0; j < resultMethod3.length; j += 1) {
    if (langs[i] < resultMethod3[j]) {
      resultMethod3.splice(j, 0, langs[i]);
      addResult = true;
      break;
    }
  }

  if (!addResult) {
    resultMethod3.push(langs[i]);
  }
}

console.log("resultMethod3", resultMethod3);
