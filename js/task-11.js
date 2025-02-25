// Завдання: "Факторіал"
// Опис:
// Напиши функцію factorial(n), яка обчислює факторіал числа n рекурсивно.

// Приклад роботи:
// console.log(factorial(5)); // 120
// console.log(factorial(7)); // 5040

function factorial(n) {
  if (n < 0) return "Factorial of a negative number does not exist!";

  return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(`factorial 5 =`, factorial(5)); // 120
console.log(`factorial 7 =`, factorial(7)); // 5040
console.log(`factorial 10 =`, factorial(10)); // 3628800
console.log(`factorial 20 =`, factorial(20)); // 2432902008176640000
console.log(`factorial -5 =`, factorial(-5)); // Factorial of a negative number does not exist!

// Спосіб 2 (без використання рекурсії)
function factorialMethod2(n) {
  if (n < 0) return "Factorial of a negative number does not exist!";
  if (n === 0) return 1;

  let total = 1;

  for (let i = 1; i <= n; i += 1) {
    total *= i;
  }

  return total;
}

console.log(`Method2: factorial 5 =`, factorialMethod2(5)); // 120
console.log(`Method2: factorial 7 =`, factorialMethod2(7)); // 5040
console.log(`Method2: factorial 10 =`, factorialMethod2(10)); // 3628800
console.log(`Method2: factorial 20 =`, factorialMethod2(20)); // 2432902008176640000
console.log(`Method2: factorial -5 =`, factorialMethod2(-5)); // Factorial of a negative number does not exist!
