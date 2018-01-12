class ArrowScroll {
  constructor() {
    this.arrowDown = document.getElementById('arrowDown');
    this.arrowUp = document.getElementById('arrowUp');
  }

  init() {
    if (this.arrowDown) {
      this.arrowDown.addEventListener('click', this.arrowClickHandler.bind(this));
    }
    if (this.arrowUp) {
      this.arrowUp.addEventListener('click', this.arrowClickHandler.bind(this));
    }
  }

  arrowClickHandler() {
    let targetSection;
    const splitSection = document.querySelector('.section_split');
    const mainSection = document.getElementById('mainSection');

    if (splitSection) {
      targetSection = splitSection;
    } else {
      targetSection = mainSection;
    }

    const coords = this.getCoords(targetSection);

    this.smoothScroll(coords);
  }

  smoothScroll(coords, duration = 300) {
    const startDate = Date.now();

    function move() {
      const progress = Math.min(1, (Date.now() - startDate) / duration);
      const initialCoords = window.pageYOffset;

      window.scrollTo(0, (1 - progress) * initialCoords + coords * progress);

      if (progress < 1) {
        window.requestAnimationFrame(move);
      } else {
        return
      }
    }

    move();
  }

  getCoords(elem) {
    const coordsOfElem = elem.getBoundingClientRect();

    return coordsOfElem.top + window.pageYOffset;
  }
}

export default ArrowScroll;