const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.menu__button-open');
const closeMenuBtn = document.querySelector('.menu__button-close');
const bodyScrollLock = require('body-scroll-lock');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  menu.classList.toggle('menu--mobile-opened');

  const targetElement = document.querySelector('.menu');

  const scrollLockMethod = !isMenuOpen
    ? bodyScrollLock.disableBodyScroll(targetElement)
    : bodyScrollLock.enableBodyScroll(targetElement);
};

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

// Close the mobile menu on click on nav menu link, if mobile menu is opened
document.querySelectorAll('.menu__link').forEach(item => {
  item.addEventListener('click', event => {
    if (menu.classList.contains('menu--mobile-opened')) {
      toggleMenu();
    }
  });
});
