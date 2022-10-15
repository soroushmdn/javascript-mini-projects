// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@ SOLUTION 1 @@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const search = document.querySelector('input');
// const movies = document.querySelectorAll('.movie-box');

// search.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     let searchValue = search.value.toLowerCase();

//     movies.forEach((movie) => {
//       if (searchValue === movie.dataset.name) {
//         movie.style.display = 'block';
//       } else {
//         movie.style.display = 'none';
//       }
//     });
//   }
// });

// search.addEventListener('keyup', () => {
//   if (search.value.trim() === '') {
//     movies.forEach((movie) => {
//       movie.style.display = 'block';
//     });
//   }
// });

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@ SOLUTION 2 @@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const search = document.querySelector('input');
const movies = document.querySelectorAll('.movie-box');

search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    let searchValue = search.value.toLowerCase();

    movies.forEach((movie) => {
      const movieName = movie.querySelector('h5').textContent;

      // indexOf() returns the position of a specified value in an array
      // The indexOf() method returns -1 if the value is not found

      if (movieName.toLowerCase().indexOf(searchValue) != -1) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  }
});

search.addEventListener('keyup', () => {
  if (search.value.trim() === '') {
    movies.forEach((movie) => {
      movie.style.display = 'block';
    });
  }
});
