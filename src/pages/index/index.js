import 'normalize.css';
import '../../static/styles/main.scss';
import './index.scss';
// components;
import '../../components/user/user.scss';
import '../../components/socials/socials.scss';
import '../../components/nav_list/nav_list.scss';
import '../../components/parallaxMove/parallax.scss';
import '../../components/preloader/preloader.scss';
import '../../components/form_validation/form_validation.scss';
// components scripts
import Parallax from '../../components/parallaxMove/parallax.js';
import Preloader from '../../components/preloader/preloader.js';
import FormValidation from '../../components/form_validation/form_validation.js';
// media
import '../../static/styles/layout/settingsMedia.scss';
// scripts
import Flip from '../../scripts/auth_flip.js';

document.addEventListener('DOMContentLoaded', () => {
  new Preloader().init();
  new Flip().init();
  new Parallax().init();
  new FormValidation().init();
});