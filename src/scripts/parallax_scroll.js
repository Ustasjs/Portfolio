class ParallaxScroll {
  init() {
    const bgImage = document.getElementById('parallax');
    const bgWord = document.getElementById('bgWord');
    const mainLogo = document.getElementById('user');
    const tabletScreenWidth = 768;
    let windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
      if (windowWidth <= tabletScreenWidth) {
        bgImage.style.transform = 'translate(-50%, -50%)';
        bgWord.style.transform = 'translate(-50%, -50%)';
        mainLogo.style.transform = 'translate(-50%, -50%)';
      }
    })

    window.addEventListener('scroll', () => {
      if (windowWidth > tabletScreenWidth) {
        const scrollValue = window.pageYOffset;

        this.move(bgImage, scrollValue, 60);
        this.move(bgWord, scrollValue, 10);
        this.move(mainLogo, scrollValue, 3);
      }
    })

  }

  move(block, windowScroll, speedIndex) {
    const speed = - (windowScroll / speedIndex) + '%';
    const style = block.style;
    const translate = `translate3d(0, ${speed}, 0) translate(-50%, -50%)`;

    style.transform = translate;
  }
}

export default ParallaxScroll;