// const accordian = document.getElementsByClassName('accordian__content');

// for (i = 0; i < accordian.length; i++) {
//   accordian[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }

const accordian = document.querySelectorAll('.accordian__content');

accordian.forEach((a) => {
  a.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});
