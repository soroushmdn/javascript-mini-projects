const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    // console.log(star);
    // console.log(index1);

    stars.forEach((star, index2) => {
      // console.log(star);
      // console.log(index1);
      // console.log(index2);

      index1 >= index2
        ? star.classList.add('active')
        : star.classList.remove('active');
    });
  });
});
