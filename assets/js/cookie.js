const cookie = document.querySelector('.cookie'),
  buttons = document.querySelectorAll('.buttons button');

const executeCodes = () => {
  //.5  if cookie contains value = soroushkarimi it will be returned and below of this code will not run
  if (document.cookie.includes('soroushkarimi')) return;
  // .2
  cookie.classList.add('show-cookie');

  // .3
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookie.classList.remove('show-cookie');

      //.4
      if (button.id === 'accept-button') {
        //set cookie for 1 month
        document.cookie = `cookieBy = soroushkarimi; max-age = ${
          60 * 60 * 24 * 30
        }`;
      }
    });
  });
};

// 1.
window.addEventListener('load', executeCodes);

// 'cookieBy= soroushkarimi; max-age=' + 60 * 60 * 24 * 30;
