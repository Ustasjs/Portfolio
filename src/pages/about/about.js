import 'normalize.css';
import '../../static/styles/main.scss';
import '../../static/styles/base.scss';
import './about.scss';
// components
import '../../components/socials/socials.scss';
import '../../components/header/header.scss';
import '../../components/footer/footer.scss';
import '../../components/nav_list/nav_list.scss';
import '../../components/user/user.scss';
import '../../components/circles/circles.scss';
import '../../components/triangles/triangles.scss';
import '../../components/burger_menu/burger_menu.scss';
import '../../components/preloader/preloader.scss';
// component scripts
import Burger from '../../components/burger_menu/burger_menu.js';
import Circles from '../../components/circles/circles.js';
// scripts
import ArrowScroll from '../../scripts/arrow_scroll';
import ParralaxScroll from '../../scripts/parallax_scroll';
import Skills from '../../scripts/fetchData/skills';
// media
import '../../static/styles/layout/settingsMedia.scss';
import '../../static/styles/baseMedia.scss';

import Map from '../../scripts/map';

new Skills().init()
  .then(() => {
    Map.makeMap();
    new Circles().init();
    new Burger().init();
    new ArrowScroll().init();
    new ParralaxScroll().init();
  })
