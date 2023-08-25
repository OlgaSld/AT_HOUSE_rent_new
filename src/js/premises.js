// import Swiper from 'swiper';

import { morePremices } from "./premices_array";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css"

const swiper = new Swiper('.swiper', {
  // //  configure Swiper to use modules
  //   modules: [Navigation, Pagination],
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


const nextEl = document.querySelector('.swiper-button-next');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});



const btnPhoto = document.querySelector('.more-detail');
const morePhoto = document.querySelector('.more-premices')
const container = document.querySelector('.premises-swiper')
console.log(morePhoto)

btnPhoto.addEventListener('click', onOpenPhoto)

// container.innerHTML = ""

function onOpenPhoto() {
  morePhoto.insertAdjacentHTML('beforeend', createMarkup(morePremices));
}

function createMarkup(arr) {
  return arr.map(({ img1, img2, img3, img4, src }) =>
    `<li class="js-photo-prem">
        <picture>
        <source srcset=${img2}" media="(min-width: 821px)" />
        <source srcset=${img1} media="(max-width: 820px)" />
          <img src="${img1}" alt="${src}">
          </picture>
        <picture>
        <source srcset=${img2}" media="(min-width: 821px)" />
        <source srcset=${img2} media="(max-width: 820px)" />
          <img src="${img2}" alt="${src}">
          </picture>
        <picture>
        <source srcset=${img2}" media="(min-width: 821px)" />
        <source srcset=${img3} media="(max-width: 820px)" />
          <img src="${img3}" alt="${src}">
          </picture>
        <picture>
        <source srcset=${img2}" media="(min-width: 821px)" />
        <source srcset=${img4} media="(max-width: 820px)" />
          <img src="${img4}" alt="${src}">
          </picture>
        </li>`).join('');
}

