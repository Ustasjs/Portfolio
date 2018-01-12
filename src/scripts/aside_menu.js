class AsideMenu {
  constructor() {
    this.appWindowWidth = document.documentElement.clientWidth;
    this.menu = document.getElementById('menu');
    this.innerList = document.querySelector('.content__list');
    this.isOpen = false;
    this.articles = document.querySelectorAll('.blog__article');
    this.articlesLinks = document.querySelectorAll('.content__link');
    this.mainSection = document.getElementById('mainSection');
    this.tabletScreenWidth = 768;
  }

  init() {
    // update window width
    window.addEventListener('resize', () => {
      this.appWindowWidth = window.innerWidth;
    });

    // handle menu click
    this.menu.addEventListener('click', this.clickMenuHandler.bind(this));

    // active article menu
    window.addEventListener('scroll', this.activeArticleHandler.bind(this))

    // fixed menu on desktop
    window.addEventListener('scroll', this.fixedMenuHandler.bind(this))

    // hide menu on first screen
    window.addEventListener('scroll', this.hideMenuControlOnFirstScreen.bind(this))

    // update fixed menu handler and hide menu control
    window.addEventListener('resize', () => {
      this.fixedMenuHandler();

      if (this.appWindowWidth <= this.tabletScreenWidth) {
        this.innerList.classList.remove('content__list_fixed');
      } else {
        this.menu.classList.remove('main__content_hidden');
      }
    });
  }

  clickMenuHandler(e) {
    if (!this.Open && this.appWindowWidth <= this.tabletScreenWidth && !e.target.closest('.content__item')) {
      this.menu.classList.toggle('main__content_active');
    }
  }

  activeArticleHandler() {
    function compare(a, b) {
      return a - b;
    }

    const articlesBottomCoords = [].map.call(this.articles, currentElement => this.getVerticalCoords(currentElement).bottom);
    const currentScroll = window.pageYOffset;
    const coordsList = articlesBottomCoords.concat(currentScroll).sort(compare);
    const currentScrollPosition = coordsList.indexOf(currentScroll);

    [].forEach.call(this.articlesLinks, (element) => element.classList.remove('content__link_active'));
    this.articlesLinks[currentScrollPosition].classList.add('content__link_active');
  }

  fixedMenuHandler() {
    const currentScroll = window.pageYOffset;
    const mainSectionTopCoords = this.getVerticalCoords(this.mainSection).top;

    if (this.appWindowWidth <= this.tabletScreenWidth) {
      return
    }

    if (mainSectionTopCoords <= currentScroll) {
      this.innerList.classList.add('content__list_fixed');
    } else {
      this.innerList.classList.remove('content__list_fixed');
    }
  }

  hideMenuControlOnFirstScreen() {
    const currentScroll = window.pageYOffset;
    const mainSectionTopCoords = this.getVerticalCoords(this.mainSection).top;

    if (this.appWindowWidth > this.tabletScreenWidth) {
      return
    }

    // 200px - margin for main section

    if (mainSectionTopCoords - 200 >= currentScroll) {
      this.menu.classList.add('main__content_hidden');
    } else {
      this.menu.classList.remove('main__content_hidden');
    }
  }

  getVerticalCoords(elem) {
    const coordsOfElem = elem.getBoundingClientRect();

    return {
      top: coordsOfElem.top + window.pageYOffset,
      bottom: coordsOfElem.bottom + window.pageYOffset
    };
  }
}

export default AsideMenu;