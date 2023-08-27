
import { morePremices } from './premices_array';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
  centeredSlides: true,
        initialSlide: 1,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
    keyboard: {
      enabled: false,
  },
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

});

const nextEl = document.querySelector('.swiper-button-next');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});




const btnPhoto = document.querySelectorAll('.more-detail');
const morePhoto = document.querySelector('.more-premices');
const closePhoto = document.querySelector('.close-photo')

closePhoto.classList.add('visually-hidden')

btnPhoto.forEach((button) => {
  button.addEventListener('click', onOpenPhoto)});

function onOpenPhoto(e) {
  e.preventDefault();
  const btnId = e.target.dataset.id;

  const markup = morePremices.filter(({id}) => id === btnId).map(({ id, img1m, img2m, img3m, img4m, img1d, img2d, img3d, img4d, src }) =>
    `<li class="js-photo-prem" data-id=${id}>
        <picture>
        <source srcset=${img1d}" media="(min-width: 821px)" />
        <source srcset=${img1m} media="(max-width: 820px)" />
          <img src="${img1m}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset=${img2d}" media="(min-width: 821px)" />
        <source srcset=${img2m} media="(max-width: 820px)" />
          <img src="${img2m}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset=${img3d}" media="(min-width: 821px)" />
        <source srcset=${img3m} media="(max-width: 820px)" />
          <img src="${img3m}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset=${img4d}" media="(min-width: 821px)" />
        <source srcset=${img4m} media="(max-width: 820px)" />
          <img src="${img4m}" alt="${src}" width="471" height="354">
          </picture>
        </li>`).join('');
  morePhoto.insertAdjacentHTML('beforeend', markup)
  closePhoto.classList.remove('visually-hidden')
}


closePhoto.addEventListener('click', onClosePhoto)

function onClosePhoto() {
  morePhoto.innerHTML = '';
  closePhoto.classList.add('visually-hidden');
}

