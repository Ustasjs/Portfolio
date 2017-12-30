const slidesInfo = [
  {
    title: 'Работа 1',
    url: '../../static/images/slider/work-1.png',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://www.google.com/'
  },
  {
    title: 'Работа 2',
    url: '../../static/images/slider/work-2.png',
    stack: 'HTML, CSS, Ruby',
    link: 'https://www.google.com/'
  },
  {
    title: 'Работа 3',
    url: '../../static/images/slider/work-3.png',
    stack: 'HTML, CSS, Python',
    link: 'https://www.google.com/'
  },
  {
    title: 'Работа 4',
    url: '../../static/images/slider/work-4.png',
    stack: 'HTML, CSS, C++',
    link: 'https://www.google.com/'
  },
]

class Slider {

  init() {
    const slider = document.getElementById('slider');
    const mainSlides = document.querySelectorAll('.slider__main-wrap');
    const upButtonSlides = document.querySelectorAll('.slider__list_up .slider__wrap');
    const downButtonSlides = document.querySelectorAll('.slider__list_down .slider__wrap');
    const buttonUp = document.querySelector('.slider__button_up');
    const buttonDown = document.querySelector('.slider__button_down');

    slider.addEventListener('click', (e) => {
      const target = e.target;
      const mainActiveElement = document.querySelector('.slider__main-wrap_active');
      const upActiveElement = document.querySelector('.slider__list_up .slider__wrap_active');
      const downActiveElement = document.querySelector('.slider__list_down .slider__wrap_active');

      switch (target) {
        case buttonUp:
          this.moveHandler(upButtonSlides, 'second', upActiveElement, 'slider__wrap', 'up');
          this.moveHandler(downButtonSlides, 'second', downActiveElement, 'slider__wrap', 'up');
          this.moveHandler(mainSlides, 'main', mainActiveElement, 'slider__main-wrap', 'up');
          break;
        case buttonDown:
          this.moveHandler(upButtonSlides, 'second', upActiveElement, 'slider__wrap', 'down');
          this.moveHandler(downButtonSlides, 'second', downActiveElement, 'slider__wrap', 'down');
          this.moveHandler(mainSlides, 'main', mainActiveElement, 'slider__main-wrap', 'down');
          break;
        default: return;
      }
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
    const link = document.getElementById('infoLink');
    const newHeadingContent = slidesInfo[currentActiveIndex].title;
    const newStackContent = slidesInfo[currentActiveIndex].stack;
    const newUrl = slidesInfo[currentActiveIndex].link;

    heading.textContent = newHeadingContent;
    stack.textContent = newStackContent;

    link.setAttribute('href', newUrl);
  }

}

export default Slider;