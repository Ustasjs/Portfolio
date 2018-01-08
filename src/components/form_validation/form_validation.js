class FormValidation {

  init() {
    const authForm = document.getElementById('authForm');
    const contactForm = document.getElementById('contacts');

    if (authForm) {
      const containerAuth = document.querySelector('.header');
      const login = document.getElementById('login');
      const password = document.getElementById('password');

      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        removeAllErrors('auth');

        if (login.value === '' && password.value === '') {
          this.handleAllInputsSubmit(containerAuth, 'error_auth', [login, password]);
        } else {
          this.handleOneInputSubmit(containerAuth, 'error_auth', login);
          this.handleOneInputSubmit(containerAuth, 'error_auth', password);
        }
      })
    }

    if (contactForm) {
      const containerContact = document.querySelector('.feedback');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        removeAllErrors('contact');

        if (name.value === '' && email.value === '' && message.value === '') {
          this.handleAllInputsSubmit(containerContact, 'error_contact', [name, email, message]);
        } else {
          this.handleOneInputSubmit(containerContact, 'error_contact', name);
          this.handleOneInputSubmit(containerContact, 'error_contact', email);
          this.handleOneInputSubmit(containerContact, 'error_contact', message);
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

  // handleOneInputSubmit(typeOfForm, input) {
  //   const containerAuth = document.querySelector('.header');
  //   const containerContact = document.querySelector('.feedback');
  //   const isInvalid = this.validateInput(input);
  //   let oneInputMessage = 'Это поле должно быть заполнено';

  //   switch (typeOfForm) {
  //     case 'auth':
  //       if (isInvalid) {
  //         this.renderErrorMessage(containerAuth, 'error_auth', oneInputMessage);
  //         input.closest('.auth__input-wrap').classList.add('auth__input-wrap_error');
  //       }
  //       break;
  //     case 'contact':
  //       if (isInvalid) {
  //         this.renderErrorMessage(containerContact, 'error_contact', oneInputMessage);
  //         input.classList.add('contact-form__input_error');
  //       }
  //       break;
  //   }
  // }

  handleOneInputSubmit(container, containerErrorClassName, input) {
    const isInvalid = this.validateInput(input);
    let oneInputMessage = 'Это поле должно быть заполнено';

    if (isInvalid) {
      this.renderErrorMessage(container, containerErrorClassName, oneInputMessage);
      input.classList.add('input_type_error');
    }
  }

  handleAllInputsSubmit(container, containerErrorClassName, arrOfInputs) {
    const isAllInvalid = arrOfInputs.every((elem) => this.validateInput(elem) === true);
    const allInputMessage = 'Все поля должны быть заполнены';

    if (isAllInvalid) {
      this.renderErrorMessage(container, containerErrorClassName, allInputMessage);
      arrOfInputs.forEach((elem) => {
        elem.classList.add('input_type_error');
      })
    }
  }

}

export default FormValidation;

export function removeAllErrors() {
  const errors = document.querySelectorAll('.error');
  let errorInputs;
  let className = 'input_type_error';

  errorInputs = document.querySelectorAll(`.${className}`);

  if (errors.length > 0) {
    [...errors].forEach((element) => {
      element.remove()
    });
  }

  if (errorInputs.length > 0) {
    [...errorInputs].forEach((element) => element.classList.remove(className));
  }

}