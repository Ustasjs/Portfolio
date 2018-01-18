class Slider {

  constructor(data) {
    this.slidesInfo = data;
  }

  init() {
    if (this.slidesInfo === undefined) {
      return;
    }

    const slider = document.getElementById('slider');
    const mainSlides = document.querySelectorAll('.slider__main-wrap');
    const upButtonSlides = document.querySelectorAll('.slider__list_up .slider__wrap');
    const downButtonSlides = document.querySelectorAll('.slider__list_down .slider__wrap');

    slider.addEventListener('click', (e) => {
      const target = e.target;
      const mainActiveElement = document.querySelector('.slider__main-wrap_active');
      const upActiveElement = document.querySelector('.slider__list_up .slider__wrap_active');
      const downActiveElement = document.querySelector('.slider__list_down .slider__wrap_active');

      if (target.closest('.slider__button_up') !== null) {
        this.moveHandler(upButtonSlides, 'second', upActiveElement, 'slider__wrap', 'up');
        this.moveHandler(downButtonSlides, 'second', downActiveElement, 'slider__wrap', 'up');
        this.moveHandler(mainSlides, 'main', mainActiveElement, 'slider__main-wrap', 'up');
      }

      if (target.closest('.slider__button_down') !== null) {
        this.moveHandler(upButtonSlides, 'second', upActiveElement, 'slider__wrap', 'down');
        this.moveHandler(downButtonSlides, 'second', downActiveElement, 'slider__wrap', 'down');
        this.moveHandler(mainSlides, 'main', mainActiveElement, 'slider__main-wrap', 'down');
      }

      return;
    })
  }

  moveHandler(elements, typeOfElements, activeElement, className, direction) {
    const indexOfActive = [].indexOf.call(elements, activeElement);
    let newIndex;

    switch (direction) {
      case 'up': newIndex = indexOfActive === elements.length - 1 ? 0 : indexOfActive + 1;
        break;
      case 'down': newIndex = indexOfActive === 0 ? elements.length - 1 : indexOfActive - 1;
        break;
      default: throw new Error('Incorrect type of direction');
    }

    activeElement.classList.remove(`${className}_active`);
    if (typeOfElements === 'second') {
      activeElement.classList.add(`${className}_prev`);
      setTimeout(() => {
        activeElement.classList.remove(`${className}_prev`);
      }, 320)
    } else {
      this.handleInfoRefresh(newIndex);
    }
    elements[newIndex].classList.add(`${className}_active`);

  }

  handleInfoRefresh(currentActiveIndex) {
    const heading = document.getElementById('headingContent');
    const stack = document.getElementById('stackContent');
    const description = document.getElementById('description');
    const link = document.getElementById('infoLink');
    const newHeadingContent = this.slidesInfo[currentActiveIndex].name;
    const newStackContent = this.slidesInfo[currentActiveIndex].stack;
    const newDescription = this.slidesInfo[currentActiveIndex].description;
    const newUrl = this.slidesInfo[currentActiveIndex].link;

    heading.textContent = newHeadingContent;
    stack.textContent = newStackContent;
    description.textContent = newDescription;

    link.setAttribute('href', newUrl);
  }

}

export default Slider;