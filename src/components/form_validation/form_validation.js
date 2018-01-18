class FormValidation {

  constructor(func) {
    this.formMethod = func;
  }

  init() {
    let isValid = false;
    const authForm = document.getElementById('authForm');
    const contactForm = document.getElementById('contacts');

    if (authForm) {
      const containerAuth = document.querySelector('.header');
      const login = document.getElementById('login');
      const password = document.getElementById('password');
      const humanCheck = authForm.elements.humanCheck;
      const radioValueYes = document.getElementById('radioYes');
      const customCheckbox = document.getElementById('styledHumanCheck');
      const customRadios = document.querySelectorAll('.auth__custom-radio');

      humanCheck.addEventListener('click', () => {
        customCheckbox.classList.remove('checkbox_error');
      })

      radioValueYes.addEventListener('click', () => {
        customRadios.forEach((elem) => elem.classList.remove('radio_error'));
      })

      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        removeAllErrors('auth');

        if (login.value === '' && password.value === '') {
          isValid = !!this.handleAllInputsSubmit(containerAuth, 'error_auth', [login, password]);
        } else {
          isValid = (this.handleOneInputSubmit(containerAuth, 'error_auth', login) &&
            this.handleOneInputSubmit(containerAuth, 'error_auth', password));
        }

        if (!humanCheck.checked) {
          customCheckbox.classList.add('checkbox_error');
        }

        if (!radioValueYes.checked) {
          customRadios.forEach((elem) => elem.classList.add('radio_error'));
        }

        if (isValid && humanCheck.checked && radioValueYes.checked) {
          this.formMethod(login.value, password.value)
            .catch((err) => {
              this.renderMessage(containerAuth, 'error_auth', err.message)
            })
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
          isValid = !!this.handleAllInputsSubmit(containerContact, 'error_contact', [name, email, message]);
        } else {
          isValid = (this.handleOneInputSubmit(containerContact, 'error_contact', name) &&
            this.handleOneInputSubmit(containerContact, 'error_contact', email) &&
            this.handleOneInputSubmit(containerContact, 'error_contact', message));
        }

        if (isValid) {
          this.formMethod(name.value, email.value, message.value)
            .then((data) => {
              this.renderMessage(containerContact, 'succes_contact', data.message)
            })
            .catch((err) => {
              this.renderMessage(containerContact, 'error_contact', err.message)
            })
        }
      })
    }

  }

  renderMessage(parent, className, text) {
    const messageElement = document.createElement('div');

    messageElement.textContent = text;
    messageElement.classList.add('message');
    messageElement.classList.add(className);

    parent.appendChild(messageElement);
  }

  validateInput(input) {
    return input.value === '';
  }

  handleOneInputSubmit(container, containerErrorClassName, input) {
    let result;
    const isInvalid = this.validateInput(input);
    let oneInputMessage = 'Это поле должно быть заполнено';

    if (isInvalid) {
      this.renderMessage(container, containerErrorClassName, oneInputMessage);
      input.classList.add('input_type_error');

      result = false;
    } else {
      result = true;
    }

    return result;
  }

  handleAllInputsSubmit(container, containerErrorClassName, arrOfInputs) {
    let result;
    const isAllInvalid = arrOfInputs.every((elem) => this.validateInput(elem) === true);
    const allInputMessage = 'Все поля должны быть заполнены';

    if (isAllInvalid) {
      this.renderMessage(container, containerErrorClassName, allInputMessage);
      arrOfInputs.forEach((elem) => {
        elem.classList.add('input_type_error');
      });

      result = false;
    } else {
      result = true;
    }

    return result;
  }

}

export default FormValidation;

export function removeAllErrors() {
  const errors = document.querySelectorAll('.message');
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