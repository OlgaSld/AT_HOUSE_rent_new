// import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    // initialSlide: 1,
  loop: true,
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 620px
    620: {
      slidesPerView: 2,
      spaceBetween: 20
      },
    // when window width is >= 1200px
    1100: {
      slidesPerView: 2,
      spaceBetween: 20,
      // initialSlide: 4,
    },
  },
    keyboard: {
        enabled: true,
    },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
  },

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


// const btnPhoto = document.querySelector('.more-detail');

// btnPhoto.addEventListener('click', onOpenPhoto)

// function onOpenPhoto() {

// }

