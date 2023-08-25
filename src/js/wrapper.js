import { freePremises } from "./premices_array";

const wrapper = document.querySelector('.block-photo-premises');
function createMarkup(arr) {
  return arr.map(({ img, img2, square, title, info }) => `<li class="class="swiper-slide free-premices-item">
        <div class="swiper-slide-image">
        <picture>
        <source srcset=${img2}" media="(min-width: 821px)" />
        <source srcset=${img} media="(max-width: 820px)" />
        <img class="free-premises-img" src="${img}" alt="${square}" width="273" height="322"/>
        <div class="wrapper-text">
        <p class="free-premises-sq">${square}</p>
        <p class="free-premises-title">${title}</p>
        <p class="free-premises-info">${info}</p>
        </div>
        <button class="more-detail">Фотографії</button>
        </div>
        </li>`).join('');
}
wrapper.insertAdjacentHTML('beforeend', createMarkup(freePremises));
