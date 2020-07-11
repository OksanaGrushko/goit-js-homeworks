import users from './gallery-items.js';

// console.table(users);
const galleryRef = document.querySelector('.gallery');
const modalRef = document.querySelector('.lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('.lightbox__button');

const createGalery = user => {
  // додаємо лішку
  const conteinerRef = document.createElement('li');
  // клас для лі підключаєм
  conteinerRef.classList.add('gallery__item');

  // додаємо силку
  const linkRef = document.createElement('a');
  // клас силки підключаєм
  linkRef.classList.add('gallery__link');
  //   linkRef.href = user.original;

  // добавляєм картинку
  const imgRef = document.createElement('img');
  // клас для картинки підключаєм
  imgRef.classList.add('gallery__image');
  // підтягуєм з бази маленьке фото
  imgRef.src = user.preview;
  // підтягуєм з бази фото більше
  imgRef.dataSource = user.original;
  // підтягуєм з бази альт
  imgRef.alt = user.description;

  conteinerRef.appendChild(linkRef);
  linkRef.appendChild(imgRef);
  return conteinerRef;
};

galleryRef.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

const galleryImages = users.map(user => createGalery(user));
galleryRef.append(...galleryImages);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalRef.classList.add('is-open');
  lightboxImageRef.src = event.target.dataSource;
  // console.log(lightboxImageRef.src);
}

function closeModal() {
  modalRef.classList.remove('is-open');
  lightboxImageRef.src = '';
  // console.log(lightboxImageRef.src);
}
