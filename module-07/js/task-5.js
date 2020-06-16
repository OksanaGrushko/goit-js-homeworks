// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const inputRef = document.querySelector('#name-input');
const nameLableRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  nameLableRef.textContent =
    event.target.value.length > 0 ? event.target.value : 'незнакомец';
});

// inputRef.addEventListener('change', event => {
//     nameLableRef.textContent =
// event.target.value.length > 0 ? event.target.value : 'незнакомец';
// });
