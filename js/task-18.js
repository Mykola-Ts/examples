// Example - Калькулятор
// Створіть об'єкт calculator з трьома методами:
// read(a, b) - приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

const calculator = {
  read(a = 0, b = 0) {
    this.a = a;
    this.b = b;

    return this;
  },

  add() {
    return (this.a ?? 0) + (this.b ?? 0);
  },

  mult() {
    return !this.a && !this.b ? 0 : (this.a ?? 1) * (this.b ?? 1);
  },
};

console.log(calculator.read(2, 5));
console.log(calculator.add()); // 7
console.log(calculator.mult()); // 10
