const modalButton = document.querySelector('.modal__button'),
  modalContiner = document.querySelector('.modal__container'),
  modalClose = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  modalContiner.classList.add('show-modal');
});

modalClose.addEventListener('click', () => {
  modalContiner.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
  if (e.target === modalContiner) {
    modalContiner.classList.remove('show-modal');
  }
});
