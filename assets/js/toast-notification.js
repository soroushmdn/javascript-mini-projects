const button = document.querySelector('button');
const toast = document.querySelector('.toast');
const progress = document.querySelector('.progress');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
  toast.classList.add('active');
  progress.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 5000);

  setTimeout(() => {
    progress.classList.remove('active');
  }, 5300);
});

close.addEventListener('click', () => {
  toast.classList.remove('active');

  setTimeout(() => {
    progress.classList.remove('active');
  }, 300);
});
