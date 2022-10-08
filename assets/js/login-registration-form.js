const contianer = document.querySelector('.container'),
  loginButton = document.querySelector('.login-button'),
  signupButton = document.querySelector('.signup-button');

const signupForm = document.querySelector('.signup form'),
  loginForm = document.querySelector('.login form'),
  emailField = signupForm.querySelector('.email-field'),
  emailInput = signupForm.querySelector('.email-input'),
  passField = signupForm.querySelector('.password-field'),
  passInput = signupForm.querySelector('.password-input'),
  cPassField = signupForm.querySelector('.confirm-password-field'),
  cPassInput = signupForm.querySelector('.confirm-password-input'),
  nameInput = signupForm.querySelector('.name-input');

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@ SWITCH BETWEEN LOGIN & SIGNUP @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

signupButton.addEventListener('click', () => {
  contianer.classList.add('active');
});
loginButton.addEventListener('click', () => {
  contianer.classList.remove('active');
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@ SHOW & HIDE PASSWORDS @@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const eyeIcons = document.querySelectorAll('.eyeicon');

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    const passwordInput = eyeIcon.parentElement.querySelector('input');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.replace('bx-hide', 'bx-show');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.replace('bx-show', 'bx-hide');
    }
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@ EMAIL VALIDATION @@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function emailCheck() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add('invalid');
  } else {
    emailField.classList.remove('invalid');
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@ PASSWORD VALIDATION @@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function passCheck() {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passwordPattern)) {
    passField.classList.add('invalid');
  } else {
    passField.classList.remove('invalid');
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@ CONFIRM PASSWORD VALIDATION @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === '') {
    cPassField.classList.add('invalid');
  } else {
    cPassField.classList.remove('invalid');
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@ CALLING FUNCTIONS @@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  emailCheck();
  passCheck();
  confirmPass();

  emailInput.addEventListener('keyup', emailCheck);
  passInput.addEventListener('keyup', passCheck);
  cPassInput.addEventListener('keyup', confirmPass);

  if (
    !emailField.classList.contains('invalid') &&
    !passField.classList.contains('invalid') &&
    !cPassField.classList.contains('invalid') &&
    nameInput.value !== ''
  ) {
    location.href = signupForm.getAttribute('action');
  }
});
