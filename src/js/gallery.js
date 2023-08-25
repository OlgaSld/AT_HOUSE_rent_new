// import Swiper from 'swiper';

var swiper = new Swiper('.mySwiper', {
      // modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 10,
   centeredSlides: true,
    enabled: true,
    initialSlide: 1,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  // pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //       renderBullet: function (index, className) {
  //         return '<span class="' + className + '">' + (index + 1) + "</span>";
  //       },
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


const nextEl = document.querySelector('.swiper-button-next');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});



