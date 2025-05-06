// Завдання: Очистити кошик від неактивних товарів

// Умова:
// Створи функцію cleanInactiveProducts(cart), яка приймає масив об’єктів — це "кошик покупок". Кожен об’єкт має таку структуру:

// {
//   id: number,
//   name: string,
//   quantity: number,
//   isActive: boolean
// }

// Функція повинна мутувати масив таким чином:

// Видалити з масиву всі об’єкти, у яких isActive === false або quantity === 0.

// Обмеження:
// Не створювати новий масив — лише мутувати вхідний.

// Повернути мутований масив.

// ✅ Приклад:

// const cart = [
//   { id: 1, name: "Laptop", quantity: 1, isActive: true },
//   { id: 2, name: "Mouse", quantity: 0, isActive: true },
//   { id: 3, name: "Keyboard", quantity: 1, isActive: false },
//   { id: 4, name: "Monitor", quantity: 2, isActive: true }
// ];

// cleanInactiveProducts(cart);

// console.log(cart);
// [
//   { id: 1, name: "Laptop", quantity: 1, isActive: true },
//   { id: 4, name: "Monitor", quantity: 2, isActive: true }
// ]

function cleanInactiveProducts(cart = []) {
  for (let i = 0; i < cart.length; i += 1) {
    if (!cart[i].quantity || !cart[i].isActive) {
      cart.splice(i, 1);
      i -= 1;
    }
  }
}

const cart = [
  { id: 1, name: "Laptop", quantity: 1, isActive: true },
  { id: 2, name: "Mouse", quantity: 0, isActive: true },
  { id: 3, name: "Keyboard", quantity: 1, isActive: false },
  { id: 4, name: "Monitor", quantity: 2, isActive: true },
];

cleanInactiveProducts(cart);

console.log(cart); // [{ id: 1, name: "Laptop", quantity: 1, isActive: true }, { id: 4, name: "Monitor", quantity: 2, isActive: true }];
