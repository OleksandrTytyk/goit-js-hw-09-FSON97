const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

const LOCAL_KEY = 'feedback-form-state';

fillForm();

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const { email, message } = refs.form.elements;
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = refs.form.elements;

  if (!email.value || !message.value) {
    alert('Пожалуйста, заполните все обязательные поля.');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

function fillForm() {
  const localStorageData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (localStorageData) {
    refs.email.value = localStorageData.email || '';
    refs.message.value = localStorageData.message || '';
  }
}
