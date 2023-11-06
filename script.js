const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');
const validationMessage = document.querySelector('.validation-message');

signInForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = signInForm.querySelector('input[name="email"]').value;

  
  if (!email.includes('@gmail.com')) {
    validationMessage.innerHTML = 'Please enter a valid Gmail email address.';
    return;
  }

  signInForm.submit();
});

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault();


  signUpForm.submit();
  
});
const signUpButton = document.querySelector('.sign-up button');

signUpButton.addEventListener('click', function() {
  window.location.href = 'https://docs.kbase.us/getting-started/sign-up/step-by-step';
});

const signInButton = document.querySelector('.sign-in button');

signInButton.addEventListener('click', function() {
  window.location.href = '';
});

