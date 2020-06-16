// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const textVelueRef = document.querySelector('#value');
const incrementRef = document.querySelector("[data-action='increment']");
const decrementRef = document.querySelector("[data-action='decrement']");

const incrementClik = () => {
  // console.log('+1');
  counterValue += 1;
  textVelueRef.textContent = counterValue;
};
const decrementClik = () => {
  // console.log('-1');
  counterValue -= 1;
  textVelueRef.textContent = counterValue;
};

incrementRef.addEventListener('click', incrementClik);
decrementRef.addEventListener('click', decrementClik);
