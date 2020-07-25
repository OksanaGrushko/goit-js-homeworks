import './styles.css';
import itemsTemplate from './gallery-items.hbs';
import foodMenu from './menu.json';

// const themeButtonRef = document.querySelector('.js-switch-input');
// const bodyThemeRef = document.querySelector('body');
// const galleryRef = document.querySelector('.js-menu');

const refs = {
  bodyTheme: document.querySelector('body'),
  gallery: document.querySelector('.js-menu'),
  themeButtonRef: document.querySelector('.js-switch-input'),
};

const markup = itemsTemplate(foodMenu);
//рендер разметки
refs.gallery.insertAdjacentHTML('beforeend', markup);

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//Храним данные о темах в локальном хранилище, что бы при перезагрузке страницы выбраная тема оставалась
refs.bodyTheme.classList.add(localStorage.theme);

// Вешаем слушатель на событие change
refs.themeButtonRef.addEventListener('change', SwitchInput);

savedSwitchTheme();

function SwitchInput(event) {
  //предотвращаем перезагружение страницы каждый раз
  event.preventDefault();
  localStorage.setItem(
    'theme',
    refs.themeButtonRef.checked ? theme.DARK : theme.LIGHT,
  );
  addClassThemeBody();
}

// Ставим свойство checked у чекбокса input.js-switch-input в true, чтобы ползунок стал в правильное положение
function savedSwitchTheme() {
  if (localStorage.theme === theme.DARK) {
    refs.themeButtonRef.checked = true;
  }
}

//добавляем тему по условию
function addClassThemeBody() {
  if (localStorage.theme === theme.DARK) {
    refs.bodyTheme.classList.remove('light-theme');
    refs.bodyTheme.classList.add('dark-theme');
  } else if (localStorage.theme === theme.LIGHT) {
    refs.bodyTheme.classList.remove('dark-theme');
    refs.bodyTheme.classList.add('light-theme');
  }
}
