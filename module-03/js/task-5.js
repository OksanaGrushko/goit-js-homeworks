// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  //   console.table(arr);
  //   console.table(prop);
  const i = [];
  for (const allProp of arr) {
    // console.table(allProp);
    // console.log(allProp.name);
    if (prop === 'name') {
      i.push(allProp.name);
      //   console.log(i);
    } else if (prop === 'quantity') {
      i.push(allProp.quantity);
      //   console.log(i);
    }
  }
  return i;
};

// намного проще через оператор in

// const getAllPropValues = (users, prop) => {
// let values = [];

// for (let user of users) {
// if (prop in user) {
// values.push(user[prop]);
// }
// }

// return values;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
