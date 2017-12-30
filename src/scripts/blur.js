class Blur {
  constructor() {
    this.background = document.querySelector('.solid__img');
    this.blur = document.getElementById('blur');
    this.blurContainer = document.getElementById('contact-form');
  }

  init() {
    window.addEventListener('load', () => {
      this.match();
      window.addEventListener('resize', this.match.bind(this));
    })
  }

  match() {
    if (this.background && this.blur && this.blurContainer) {
      const imgWidth = this.background.offsetWidth;
      const offsetLeft = -this.blurContainer.offsetLeft;
      const offsetTop = -this.blurContainer.offsetTop;
      const offsetImgTop = this.background.offsetTop
      let resultTop = offsetTop + offsetImgTop;
      const blurStyle = this.blur.style;

      blurStyle.backgroundSize = `${imgWidth}px auto`;
      blurStyle.backgroundPosition = `${offsetLeft}px ${resultTop}px`;
    }
  }
}

export default Blur;