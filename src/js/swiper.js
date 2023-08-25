import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// // init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

console.log('swiper', swiper);

const nextEl = document.querySelector('.swiper-button-next');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});
