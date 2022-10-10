const contianer = document.querySelector('.container'),
  loginButton = document.querySelector('.login-button'),
  signupButton = document.querySelector('.signup-button');

const signupForm = document.querySelector('.signup form'),
  loginForm = document.querySelector('.login form'),
  nameField = signupForm.querySelector('.name-field'),
  nameInput = signupForm.querySelector('.name-input'),
  nameIcon = signupForm.querySelector('.name-icon'),
  emailField = signupForm.querySelector('.email-field'),
  emailInput = signupForm.querySelector('.email-input'),
  emailIcon = signupForm.querySelector('.email-icon'),
  passField = signupForm.querySelector('.password-field'),
  passInput = signupForm.querySelector('.password-input'),
  passIcon = signupForm.querySelector('.pass-icon'),
  cPassField = signupForm.querySelector('.confirm-password-field'),
  cPassInput = signupForm.querySelector('.confirm-password-input'),
  cPassIcon = signupForm.querySelector('.cpass-icon');

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
// @@@@@@@@@@@@@@ NAME  VALIDATION @@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function nameCheck() {
  if (nameInput.value.trim() === '') {
    nameField.classList.add('invalid');
    nameIcon.classList.replace('bx-check-circle', 'bx-user');
  } else {
    nameField.classList.remove('invalid');
    nameIcon.classList.replace('bx-user', 'bx-check-circle');
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@ EMAIL VALIDATION @@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function emailCheck() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    emailField.classList.add('invalid');
    emailIcon.classList.replace('bx-check-circle', 'bx-envelope');
  } else {
    emailField.classList.remove('invalid');
    emailIcon.classList.replace('bx-envelope', 'bx-check-circle');
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
    passIcon.classList.replace('bx-check-circle', 'bx-lock-alt');
  } else {
    passField.classList.remove('invalid');
    passIcon.classList.replace('bx-lock-alt', 'bx-check-circle');
  }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@ CONFIRM PASSWORD VALIDATION @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === '') {
    cPassField.classList.add('invalid');
    cPassIcon.classList.replace('bx-check-circle', 'bx-lock-alt');
  } else {
    cPassField.classList.remove('invalid');
    cPassIcon.classList.replace('bx-lock-alt', 'bx-check-circle');
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

  nameCheck();
  emailCheck();
  passCheck();
  confirmPass();

  nameInput.addEventListener('keyup', nameCheck);
  emailInput.addEventListener('keyup', emailCheck);
  passInput.addEventListener('keyup', passCheck);
  cPassInput.addEventListener('keyup', confirmPass);

  if (
    !emailField.classList.contains('invalid') &&
    !passField.classList.contains('invalid') &&
    !cPassField.classList.contains('invalid') &&
    nameInput.value.trim() !== ''
  ) {
    location.href = signupForm.getAttribute('action');
  }
});
