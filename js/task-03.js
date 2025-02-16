// Створити функцію, яка буде рахувати, за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// 1 глибина колодязя (depth)
// Функція повертає кількість днів
// Умови: вдень равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// Використовувати цикл while()

function calcDays(depth) {
  const daySpeed = 7;
  const nightSpeed = 2;
  let days = 0;
  let total = 0;

  while (depth > total) {
    total += daySpeed;
    days += 1;

    if (depth > total) {
      total -= nightSpeed;
    }
  }

  return days;
}

console.log(calcDays(42)); // виповзе за 8 днів
console.log(calcDays(17)); // виповзе за 3 дні
console.log(calcDays(18)); // виповзе за 4 дні
