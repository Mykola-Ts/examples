// Створити функцію, яка приймає 1 параметр - масив продуктів і повертає мутований масив.
// Потрібно перебрати масив, і якщо він має об'єкти, в яких дублюються айді, то квонтіті цих елементів потрібно сплюсувати, а ті об'єкти, в яких айді співпадають, видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: "sku1",
    qty: 1,
  },
  {
    id: "sku2",
    qty: 2,
  },
  {
    id: "sku3",
    qty: 3,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 8,
  },
  {
    id: "sku2",
    qty: 19,
  },
  {
    id: "sku4",
    qty: 1,
  },
];

function sumProducts(products = []) {
  for (let i = 0; i < products.length; i += 1) {
    for (let j = i + 1; j < products.length; j += 1) {
      if (products[i].id === products[j].id) {
        products[i].qty += products[j].qty;
        products.splice(j, 1);
        j -= 1;
      }
    }
  }

  return products;
}

sumProducts(products);

console.log("products", products);
