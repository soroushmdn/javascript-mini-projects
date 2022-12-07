const floatButtons = document.querySelectorAll('button');

floatButtons.forEach((button) => {
  button.addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
});
