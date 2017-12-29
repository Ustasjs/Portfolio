class Flip {
  constructor() {
    this.isAuthStage = false;
    this.authButton = document.getElementById('authButton');
    this.container = document.getElementById('container');
    this.flipper = document.getElementById('flipper');
  }

  init() {
    if (this.authButton && this.container && this.flipper) {
      this.authButton.addEventListener('click', this.buttonClickHandler.bind(this));
      this.container.addEventListener('click', this.containerClickHandler.bind(this));
    }
  }

  buttonClickHandler() {
    this.flipper.classList.add('flip-container_auth');
    this.authButton.classList.add('auth-button_hidden');
    this.isAuthStage = true;
  }

  containerClickHandler(e) {
    const target = e.target;

    if (this.isAuthStage && !target.closest('#authButton') && !target.closest('.flip')) {
      this.flipper.classList.remove('flip-container_auth');
      this.authButton.classList.remove('auth-button_hidden');
      this.isAuthStage = false;
    }
  }

}

export default new Flip();