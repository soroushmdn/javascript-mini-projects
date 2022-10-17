const section = document.querySelector('section');
const closeButton = document.querySelector('.bx-x-circle');
const videos = document.querySelectorAll('.video');
const mainVideo = document.querySelector('.main-video video');

videos.forEach((e) => {
  e.addEventListener('click', () => {
    section.classList.add('active');

    e.classList.add('active');
    let src = document.querySelector('.video.active video').src;
    mainVideo.src = src;
  });

  closeButton.addEventListener('click', () => {
    section.classList.remove('active');

    e.classList.remove('active');
    mainVideo.src = '';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === section) {
    section.classList.remove('active');

    const activeVideo = document.querySelector('.video.active');
    activeVideo.classList.remove('active');
    mainVideo.src = '';
  }
});
