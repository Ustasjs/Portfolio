import 'normalize.css';
import '../../static/styles/main.scss';
import '../../static/styles/base.scss';
import './portfolio.scss';
// components
import '../../components/socials/socials.scss';
import '../../components/header/header.scss';
import '../../components/footer/footer.scss';
import '../../components/nav_list/nav_list.scss';
import '../../components/user/user.scss';
import '../../components/triangles/triangles.scss';
import '../../components/slider/slider.scss';
import '../../components/burger_menu/burger_menu.scss';
import '../../components/preloader/preloader.scss';
// component scripts
import Burger from '../../components/burger_menu/burger_menu.js';
import Slider from '../../components/slider/slider.js';
import Preloader from '../../components/preloader/preloader.js';
// scripts
import Blur from '../../scripts/blur.js';
import ArrowScroll from '../../scripts/arrow_scroll';
import ParallaxScroll from '../../scripts/parallax_scroll';
// media
import '../../static/styles/layout/settingsMedia.scss';
import '../../static/styles/baseMedia.scss';

document.addEventListener('DOMContentLoaded', () => {

  new Preloader().init();
  new Burger().init();
  new Blur().init();
  new ArrowScroll().init();
  new ParallaxScroll().init();
  new Slider().init();

})