import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';

import fetchCountries from './services/fetchCountries';
import rowTemplate from '../country-lict.hbs';
import listOfItems from '../country-name-ul.hbs';

const refs = {
  inputEntryField: document.querySelector('#entry-field'),
  countryLict: document.querySelector('#country-lict'),
  body: document.querySelector('#body'),
};

// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info',
// });

// Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message."
// });

// const mySuccess = success({
//   text: "I'm a success message."
// });

const debounce = require('lodash.debounce');

refs.inputEntryField.addEventListener(
  'input',
  debounce(searchFormSubmitHandler, 500),
);

function searchFormSubmitHandler(event) {
  //предотвращаем перезагружение страницы каждый раз
  event.preventDefault();
  const searchQueryInput = event.target.value;

  if (searchQueryInput === '') {
    return;
  }

  clearListItem();

  fetchCountries.fechArticles(searchQueryInput).then(data => {
    // console.log('data', data);
    // console.log('data.len', data.length);

    if (data.length > 1 && data.length <= 10) {
      const markupUl = countryUl(data);
      isertListItem(markupUl);
    }

    if (data.length >= 10) {
      const myError = error({
        text: "I'm an error message. fthsrh rtyhrsth ert e5y",
      });
    }

    if (data.length === 1) {
      const markup = bildListItemsMarkup(data);
      // console.log(markup);

      isertListItem(markup);
    }
  });
}

function isertListItem(item) {
  refs.countryLict.insertAdjacentHTML('beforeend', item);
}

function bildListItemsMarkup(items) {
  return rowTemplate(items);
}

function countryUl(items) {
  return listOfItems(items);
}

function clearListItem() {
  refs.countryLict.innerHTML = '';
}
