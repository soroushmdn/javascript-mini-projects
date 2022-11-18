const downloadButton = document.querySelector('button');
const downloadLink = 'https://www.pngrepo.com/download/355081/js.png';

const downloadProcess = () => {
  // step 7.
  if (downloadButton.classList.contains('disable-timer')) {
    return (location.href = downloadLink);
  }

  // step 2.
  let timer = downloadButton.dataset.timer;
  downloadButton.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
  downloadButton.classList.add('timer');

  const timerCounter = setInterval(() => {
    // step 3.
    if (timer > 0) {
      timer--;
      return (downloadButton.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
    }
    clearInterval(timerCounter);

    // step 4.
    location.href = downloadLink;

    // step 5.
    downloadButton.textContent = 'Your file is downloading...';

    // step 6.
    setTimeout(() => {
      downloadButton.classList.replace('timer', 'disable-timer');
      downloadButton.innerHTML = `<i class="bx bxs-download"></i>
      <span>Download Again</span>`;
    }, 2000);
  }, 1000);
};

// step 1.
downloadButton.addEventListener('click', downloadProcess);
