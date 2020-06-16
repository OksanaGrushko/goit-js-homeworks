// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().(заменить на createElement)

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createProduct = (element, array) => {
  console.log('element', element);
  console.log('array', array);
  let linkArray = [];

  array.map(image => {
    const linkImageRef = document.createElement('li');
    const imageRef = document.createElement('img');
    console.log(linkImageRef);
    imageRef.classList.add('items');
    imageRef.setAttribute('alt', image.alt);
    imageRef.setAttribute('src', image.url);
    linkImageRef.appendChild(imageRef);
    linkArray.push(linkImageRef);
  });

  console.log(element);
  element.append(...linkArray);
  //   console.log(...linkArray);
};

createProduct(document.querySelector('#gallery'), images);
