const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const createProduct = (element, array) => {
  let linkArray = [];
  console.log('element', element);
  console.log('array', array);

  array.forEach(ellement => {
    const linkRef = document.createElement('li');
    linkRef.textContent = ellement;
    console.log(linkRef);
    linkArray.push(linkRef);
  });
  element.append(...linkArray);
};

createProduct(document.querySelector('#ingredients'), ingredients);
