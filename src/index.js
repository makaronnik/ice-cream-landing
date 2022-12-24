// import Swiper JS
import Swiper, { Autoplay, Pagination, EffectFlip } from 'swiper';
 
const swiper = new Swiper('.swiper', {
      
  // configure Swiper to use modules
    modules: [Autoplay, Pagination, EffectFlip ],
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,

  // Autoplay
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,

  // },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});

