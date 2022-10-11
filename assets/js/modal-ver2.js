const btn = document.querySelector('.btn');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
