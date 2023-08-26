
const swiper = new Swiper('.mySwiper', {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    enabled: true,
    initialSlide: 1,
  loop: true,
    effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
    

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const nextEl = document.querySelector('.swiper-button-next');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});



