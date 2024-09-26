import { morePremices } from './premices_array';

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 1,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 620px
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1100: {
      slidesPerView: 2,
      spaceBetween: 20,
      // initialSlide: 2,
    },
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
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
// const morePhoto = document.querySelector('.more-premices');
// const closePhoto = document.querySelector('.close-photo');
const testModal = document.querySelector('.test-container');
const galWrapper = document.querySelector('.gallery_title-wrapper');

// closePhoto.classList.add('visually-hidden')

btnPhoto.forEach(button => {
  button.addEventListener('click', onOpenPhoto);
});

function onOpenPhoto(e) {
  e.preventDefault();
  const btnId = e.target.dataset.id;

  const markup = morePremices
    .filter(({ id }) => id === btnId)
    .map(
      ({ id, img1m, img2m, img3m, img4m, img1d, img2d, img3d, img4d, src }) =>
        `<li class="js-photo-prem" data-id=${id}>
        <picture>
        <source srcset="${img1d}" media="(min-width: 1440px)" type="image/jpg" />
        <source srcset="${img1m}" media="(max-width: 1439px)" type="image/jpg" />
          <img src="${img1m}" srcSet="${img1d}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset="${img2d}" media="(min-width: 1440px)" type="image/jpg"/>
        <source srcset="${img2m}" media="(max-width: 1439px)" type="image/jpg"/>
          <img src="${img2m}" srcSet="${img2d}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset="${img3d}" media="(min-width: 1440px)" type="image/jpg" />
        <source srcset="${img3m}" media="(max-width: 1439px)" type="image/jpg"/>
          <img src="${img3m}" srcSet="${img3d}" alt="${src}" width="471" height="354">
          </picture>
        <picture>
        <source srcset="${img4d}" media="(min-width: 1440px)" type="image/jpg" />
        <source srcset="${img4m}" media="(max-width: 1439px)" type="image/jpg"/>
          <img src="${img4m}" srcSet="${img4d}" alt="${src}" width="471" height="354">
          </picture>
        </li>  
`
    )
    .join('');
  // morePhoto.insertAdjacentHTML('beforeend', markup)
  testModal.innerHTML = markup;

  // closePhoto.classList.remove('visually-hidden')
}

// closePhoto.addEventListener('click', onClosePhoto)

// function onClosePhoto() {
//   morePhoto.innerHTML = '';
//   closePhoto.classList.add('visually-hidden');
// }

// galWrapper.classList.remove('visually-hidden')
