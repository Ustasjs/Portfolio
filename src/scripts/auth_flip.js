class Flip {
  constructor() {
    this.isAuthStage = false;
    this.authButton = document.getElementById('authButton');
    this.backButton = document.getElementById('backButton');
    this.container = document.getElementById('container');
    this.flipper = document.getElementById('flipper');
  }

  init() {
    if (this.authButton && this.container && this.flipper) {
      this.authButton.addEventListener('click', this.authButtonClickHandler.bind(this));
      this.backButton.addEventListener('click', this.backButtonClickHandler.bind(this));
      this.container.addEventListener('click', this.containerClickHandler.bind(this));
    }
  }

  authButtonClickHandler() {
    this.flipper.classList.add('flip-container_auth');
    this.authButton.classList.add('auth-button_hidden');
    this.isAuthStage = true;
  }

  backButtonClickHandler() {
    this.backToLogo();
  }

  containerClickHandler(e) {
    const target = e.target;

    if (this.isAuthStage && !target.closest('#authButton') && !target.closest('.flip')) {
      this.backToLogo();
    }
  }

  backToLogo() {
    this.flipper.classList.remove('flip-container_auth');
    this.authButton.classList.remove('auth-button_hidden');
    this.isAuthStage = false;
  }

}

export default new Flip();