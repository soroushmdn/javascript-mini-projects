const floatButton = document.querySelector('button');

floatButton.addEventListener('click', () => {
  floatButton.parentElement.classList.toggle('active');
});
