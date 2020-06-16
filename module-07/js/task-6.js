// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', checkingInput);

function checkingInput(event) {
  if (event.target.value.length < 6) {
    console.log('less 6');
    inputRef.classList.add('invalid');
  } else if (event.target.value.length > 6) {
    console.log('more 6');
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}
