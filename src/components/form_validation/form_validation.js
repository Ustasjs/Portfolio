class FormValidation {

  init() {
    const authForm = document.getElementById('authForm');
    const contactForm = document.getElementById('contacts');

    if (authForm) {
      const login = document.getElementById('login');
      const password = document.getElementById('password');

      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        removeAllErrors('auth');

        if (login.value === '' && password.value === '') {
          this.handleAllInputsSubmit('auth', [login, password]);
        } else {
          this.handleOneInputSubmit('auth', login);
          this.handleOneInputSubmit('auth', password);
        }
      })
    }

    if (contactForm) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        removeAllErrors('contact');

        if (name.value === '' && email.value === '' && message.value === '') {
          this.handleAllInputsSubmit('contact', [name, email, message]);
        } else {
          this.handleOneInputSubmit('contact', name);
          this.handleOneInputSubmit('contact', email);
          this.handleOneInputSubmit('contact', message);
        }
      })
    }

  }

  renderErrorMessage(parent, className, text) {
    const messageElement = document.createElement('div');

    messageElement.textContent = text;
    messageElement.classList.add('error');
    messageElement.classList.add(className);

    parent.appendChild(messageElement);
  }

  validateInput(input) {
    return input.value === '';
  }

  handleOneInputSubmit(typeOfForm, input) {
    const containerAuth = document.querySelector('.header');
    const containerContact = document.querySelector('.feedback');
    const isInvalid = this.validateInput(input);
    let oneInputMessage = 'Это поле должно быть заполнено';

    switch (typeOfForm) {
      case 'auth':
        if (isInvalid) {
          this.renderErrorMessage(containerAuth, 'error_auth', oneInputMessage);
          input.closest('.auth__input-wrap').classList.add('auth__input-wrap_error');
        }
        break;
      case 'contact':
        if (isInvalid) {
          this.renderErrorMessage(containerContact, 'error_contact', oneInputMessage);
          input.classList.add('contact-form__input_error');
        }
        break;
    }
  }

  handleAllInputsSubmit(typeOfForm, arrOfInputs) {
    const containerAuth = document.querySelector('.header');
    const containerContact = document.querySelector('.feedback');
    const isAllInvalid = arrOfInputs.every((elem) => this.validateInput(elem) === true);
    const allInputMessage = 'Все поля должны быть заполнены';

    switch (typeOfForm) {
      case 'auth':
        if (isAllInvalid) {
          this.renderErrorMessage(containerAuth, 'error_auth', allInputMessage);
          arrOfInputs.forEach((elem) => {
            elem.closest('.auth__input-wrap').classList.add('auth__input-wrap_error');
          })
        }
        break;
      case 'contact':
        if (isAllInvalid) {
          this.renderErrorMessage(containerContact, 'error_contact', allInputMessage);
          arrOfInputs.forEach((elem) => {
            elem.classList.add('contact-form__input_error');
          })
        }
        break;
    }
  }

}

export default FormValidation;

export function removeAllErrors(type) {
  const errors = document.querySelectorAll('.error');
  let errorInputs;
  let className;

  if (type === 'auth') {
    className = '.auth__input-wrap_error';
  } else {
    className = '.contact-form__input_error';
  }

  errorInputs = document.querySelectorAll(className);

  if (errors.length > 0) {
    [...errors].forEach((element) => {
      element.remove()
    });
  }

  if (errorInputs.length > 0) {
    [...errorInputs].forEach((element) => element.classList.remove(className.slice(1)));
  }

}