import 'normalize.css';
import '../../static/styles/main.scss';
import './blog.scss';
// components
import '../../components/socials/socials.scss';
import '../../components/header/header.scss';
import '../../components/footer/footer.scss';
import '../../components/nav_list/nav_list.scss';
import '../../components/user/user.scss';
import '../../components/triangles/triangles.scss';
import '../../components/burger_menu/burger_menu.scss';
import '../../components/preloader/preloader.scss';
// component scripts
import Burger from '../../components/burger_menu/burger_menu.js';
// scripts
import ArrowScroll from '../../scripts/arrow_scroll';
import AsideMenu from '../../scripts/aside_menu';
import ParallaxScroll from '../../scripts/parallax_scroll';
import Articles from '../../scripts/fetchData/blog';
// media
import '../../static/styles/layout/settingsMedia.scss';

// fetch data

new Articles().init()
  .then(() => {
    new Burger().init();
    new ArrowScroll().init();
    new AsideMenu().init();
    new ParallaxScroll().init();
  })