class Circles {
  constructor() {
    this.skillsSection = document.getElementById('skillsSection');
    this.circles = document.getElementById('circles');
  }

  init() {

    window.addEventListener('load', () => {
      if (this.skillsSection !== undefined && this.circles) {
        this.checkScroll();
        window.addEventListener('scroll', this.checkScroll.bind(this))
      }
    })
  }

  checkScroll() {
    const currentScroll = window.pageYOffset;
    const skillsSectionCoords = this.getCoords(this.skillsSection);

    if (currentScroll >= (skillsSectionCoords / 4 * 3)) {
      this.circles.classList.add('circles_full');
    }
  }

  getCoords(elem) {
    const coordsOfElem = elem.getBoundingClientRect();

    return coordsOfElem.top + window.pageYOffset;
  }
}

export default Circles;