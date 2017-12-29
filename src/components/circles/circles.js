class Circles {
  constructor() {
    this.headSectionHeight = document.getElementById('headSection').offsetHeight;
    this.circles = document.getElementById('circles');
  }

  init() {
    window.addEventListener('load', () => {
      if (this.headSectionHeight !== undefined && this.circles) {
        this.checkScroll();
        window.addEventListener('scroll', this.checkScroll.bind(this))
      }
    })
  }

  checkScroll() {
    const currentScroll = window.pageYOffset;
    const twoThirdsOfSectionHeight = this.headSectionHeight / 3 * 2;

    if (currentScroll >= twoThirdsOfSectionHeight) {
      this.circles.classList.add('circles_full');
    }
  }
}

export default new Circles();