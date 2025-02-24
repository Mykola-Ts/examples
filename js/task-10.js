// Завдання:
// Нарцисичне число (або число Армстронга) - це додатне число, яке є сумою власних цифр, кожна з яких піднесена до степеня, що дорівнює кількості цифр у даній основі. У цьому завданні ми обмежимося десятковим числом (основа 10).

// Наприклад, візьмемо 153 (3 цифри), що є нарцисичним:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// і 1652 (4 цифри), яке таким не є:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// Задача:

// Написати функцію, яка отримує число, та повиння повертати true або false в залежності від того, чи є задане число нарцисичним числом у системі числення з основою 10.

function isNarcissisticNumber(value) {
  const string = value.toString();
  let result = 0;

  for (const item of string) {
    result += Math.pow(Number(item), string.length); // або Number(item) ** string.length;
  }

  return result === value ? true : false;
}

console.log("Is narcissistic number 153 -", isNarcissisticNumber(153));
console.log("Is narcissistic number 1652 -", isNarcissisticNumber(1652));
console.log("Is narcissistic number 100 -", isNarcissisticNumber(100));
