class RemoveParallaxOnTouch {
  init() {
    const windowWidth = window.innerWidth;
    const tabletScreenWidth = 768;
    const parallaxContainer = document.getElementById('parallax');


    if (windowWidth <= tabletScreenWidth) {
      parallaxContainer.remove();
    }
  }
}

export default RemoveParallaxOnTouch;