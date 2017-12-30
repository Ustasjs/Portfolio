class Preloader {
  constructor() {
    this.persentage = 0;
    this.svgText = document.getElementById('spinnerText');
  }

  init() {
    const preloaderModal = document.getElementById('preloaderModal');
    const images = document.querySelectorAll('img');
    const parallax = document.getElementById('parallax');

    document.body.classList.add('prevent-scroll');
    if (parallax) {
      parallax.style.display = 'none';
    }

    this.svgText.textContent = `${this.persentage}%`;

    this.loadImages(images)
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(), 20)
        })
      })
      .then(() => {
        if (parallax) {
          parallax.style.display = 'block';
        }
        preloaderModal.remove();
        document.body.classList.remove('prevent-scroll');
      })
  }

  loadImages(images) {
    const step = Math.ceil(100 / images.length);

    function loadAndErrorHandler(resolve) {
      this.persentage = this.persentage + step;
      if (this.persentage > 100) {
        this.persentage = 100
      }
      this.svgText.textContent = `${this.persentage}%`;

      if (this.persentage === 100) {
        resolve()
      }
    }

    return new Promise((resolve) => {

      [].forEach.call(images, (elem) => {
        elem.addEventListener('load', loadAndErrorHandler.bind(this, resolve))
        elem.addEventListener('error', loadAndErrorHandler.bind(this, resolve))
      })
    })
  }
}

export default Preloader;