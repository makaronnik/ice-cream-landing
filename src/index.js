import SweetScroll from 'sweet-scroll';
import Swiper, { Autoplay, Pagination, EffectFade } from 'swiper';
import './js/mobile-menu';

// Swiper for sliders
const swiperGallery = new Swiper('.swiper--no-crossfade', {
  // configure Swiper to use modules
  modules: [Autoplay, EffectFade],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,
  speed: 2000,

  //effect
  effect: 'fade',
  fadeEffect: {
    crossFade: false,
  },

  //Autoplay
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const swiperReviews = new Swiper('.swiper--crossfade', {
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

// Smooth scrolling to anchors
document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({});
  },
  false
);

// Modals
(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-franchise-open]'),
    closeModalBtn: document.querySelector('[modal-franchise-close]'),
    modal: document.querySelector('[modal-franchise__backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
