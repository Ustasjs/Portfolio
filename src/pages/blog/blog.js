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
// component scripts
import burger from '../../components/burger_menu/burger_menu.js';
// scripts
import arrowScroll from '../../scripts/arrow_scroll';
import asideMenu from '../../scripts/aside_menu';
import parallaxScroll from '../../scripts/parallax_scroll';
// media
import '../../static/styles/layout/settingsMedia.scss';

burger.init();
arrowScroll.init();
asideMenu.init();
parallaxScroll.init();