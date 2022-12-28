import SweetScroll from 'sweet-scroll';
import Swiper, { Autoplay, Pagination, EffectFade } from 'swiper';

const bodyScrollLock = require('body-scroll-lock');

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

// Modals operations
const refs = {
  openModalButtons: document.querySelectorAll('[data-modal-open]'),
  closeModalButtons: document.querySelectorAll('[data-modal-close]'),
  closeModalButtons: document.querySelectorAll('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal-backdrop]'),
};

function openModal(modalName) {
  refs.backdrop.setAttribute('data-modal-open', modalName);
  refs.backdrop.classList.remove('is-hidden');
  bodyScrollLock.disableBodyScroll(refs.backdrop);
}

function closeModal() {
  refs.backdrop.removeAttribute('data-modal-open');
  refs.backdrop.classList.add('is-hidden');
  bodyScrollLock.enableBodyScroll(refs.backdrop);
}

refs.openModalButtons.forEach(item => {
  item.addEventListener('click', event => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (path) {
      path.every(entry => {
        console.log(entry);
        if (entry.nodeName === 'BUTTON' || entry.tagName === 'BUTTON') {
          const modalName = entry.getAttribute('data-modal-open');
          openModal(modalName);
        } else {
          return true;
        }
      });
    }
  });
});

refs.closeModalButtons.forEach(item => {
  item.addEventListener('click', event => {
    closeModal();
  });
});

refs.backdrop.addEventListener('click', event => {
  if (event.target.classList.contains('backdrop')) {
    closeModal();
  }
});

// Mobile menu
const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.menu__button-open');
const closeMenuBtn = document.querySelector('.menu__button-close');

function toggleMenu(enableBodyScroll = true) {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  menu.classList.toggle('menu--mobile-opened');

  const targetElement = document.querySelector('.menu');

  if (isMenuOpen && enableBodyScroll) {
    bodyScrollLock.enableBodyScroll(targetElement);
  } else {
    bodyScrollLock.disableBodyScroll(targetElement);
  }
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  menu.classList.remove('menu--mobile-opened');
  openMenuBtn.setAttribute('aria-expanded', false);
  const targetElement = document.querySelector('.menu');
  bodyScrollLock.enableBodyScroll(targetElement);
});

// Close the mobile menu on click on nav menu link or button, if mobile menu is opened
document.querySelectorAll('.menu__link').forEach(item => {
  item.addEventListener('click', event => {
    if (menu.classList.contains('menu--mobile-opened')) {
      toggleMenu();
    }
  });
});

document
  .querySelector('.menu__buy-now-button--in-mobile')
  .addEventListener('click', event => {
    if (menu.classList.contains('menu--mobile-opened')) {
      toggleMenu(false);
    }
  });
