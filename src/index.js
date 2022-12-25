import SweetScroll from 'sweet-scroll';
import Swiper, { Autoplay, Pagination, EffectFade } from 'swiper';
import './js/mobile-menu';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Autoplay, Pagination, EffectFade],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,
  speed: 2000,

  //effect
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  //Autoplay
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({});
  },
  false
);
