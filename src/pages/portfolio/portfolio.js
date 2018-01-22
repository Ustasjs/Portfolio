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
import '../../components/form_validation/form_validation.scss';
// component scripts
import Burger from '../../components/burger_menu/burger_menu.js';
import Slider from '../../components/slider/slider.js';
import Preloader from '../../components/preloader/preloader.js';
import FormValidation from '../../components/form_validation/form_validation.js';
// scripts
import Blur from '../../scripts/blur.js';
import ArrowScroll from '../../scripts/arrow_scroll';
import ParallaxScroll from '../../scripts/parallax_scroll';
import Works from '../../scripts/fetchData/portfolio';
import MailRequest from '../../scripts/mail_request';
// media
import '../../static/styles/layout/settingsMedia.scss';
import '../../static/styles/baseMedia.scss';

document.addEventListener('DOMContentLoaded', () => {
  const mail = new MailRequest();

  new Preloader().init();
  new Works().init()
    .then((data) => {
      new Burger().init();
      new Blur().init();
      new ArrowScroll().init();
      new ParallaxScroll().init();
      new Slider(data).init();
      new FormValidation(mail.init).init();
    })
})