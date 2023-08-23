import { gallery } from "./gallery";

const wrapper = document.querySelector('.block-photo-premises');

function createMarkup(arr) {
    return arr.map(({ img, square, title, info }) => 
        `<li class="free-premices-item">
        <img class="free-premises-img" src="${img}" alt="${square}" width="273" height="322"/>
        <div class="wrapper-text">
        <p class="free-premises-sq">${square}</p>
        <p class="free-premises-title">${title}</p>
        <p class="free-premises-info">${info}</p>
        </div>
        <button class="more-detail">Фотографії</button>
        </li>`).join('');
}
    
    wrapper.insertAdjacentHTML('beforeend', createMarkup(gallery))
