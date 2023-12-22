document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const submitBtn = document.querySelector('.submit-btn');
  const validation = document.querySelector('.validation');

  const checkPassword = () => {
    let firstPassword = passwordInput.value;
    let secondPassword = confirmPassword.value;

    if (firstPassword === secondPassword) {
      submitBtn.disabled = false;
      validation.textContent = '';
    } else {
      submitBtn.disabled = true;
      validation.textContent = 'Password do not match'
    }
  };

  confirmPassword.addEventListener('input', checkPassword);
});