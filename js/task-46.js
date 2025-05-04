// Description:
// Потрібно створити функцію, яка буде формувати чергу в магазині
// 1 параметр - масив, кількість елементів це кількість покупців, значення елементу масиву - це час, який покупець витратить на касі
// 2 параметр - кількість кас
// Повертає об'єкт, де ключ це номер каси, значення це час черги на касі
// fn([12, 3, 5, 6, 2, 15, 7], 2)
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// {1: 29, 2: 21}

function fn(arr = [], count = 1) {
  const obj = {};

  for (let i = 1; i <= count; i += 1) {
    obj[i] = 0;
  }

  return arr.reduce((acc, item) => {
    const values = Object.values(acc);
    const idx = values.indexOf(Math.min(...values)) + 1;

    acc[idx] += item;

    return acc;
  }, obj);
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2)); // {1: 29, 2: 21}

// Method 2
function fnMethod2(arr = [], count = 1) {
  const obj = {};

  for (let i = 1; i <= count; i += 1) {
    obj[i] = 0;
  }

  return arr.reduce((acc, item) => {
    let min = obj[1];
    let cashDesk = 1;

    for (let key in obj) {
      if (obj[key] < min) {
        min = obj[key];
        cashDesk = key;
      }
    }

    acc[cashDesk] += item;

    return acc;
  }, obj);
}

console.log("Method2", fnMethod2([12, 3, 5, 6, 2, 15, 7], 2)); // {1: 29, 2: 21}
