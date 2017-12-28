class Parallax {
  constructor() {
    this.layers = document.querySelectorAll('.parallax_layer')
    this.tabletScreenWidth = 768;
    this.appWindowWidth = document.documentElement.clientWidth;
  }

  init() {
    window.addEventListener('resize', () => {
      this.appWindowWidth = window.innerWidth;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.appWindowWidth >= this.tabletScreenWidth) {
        this.move(e);
      }
    });
  }

  move(e) {
    const mouseX = window.innerWidth / 2 - e.pageX;
    const mouseY = window.innerHeight / 2 - e.pageY;

    [].forEach.call(this.layers, (element, index) => {
      const moveFactor = index / 80;

      element.style.transform = `translate(${mouseX * moveFactor}px, ${mouseY * moveFactor}px)`;
    })
  }
}

export default new Parallax();