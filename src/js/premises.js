const wrapper = document.querySelector('.block-photo-premises');
console.log(wrapper)

const gallery = [
    {
        img: "../images/premises/mobile/013/013_273_322-min.jpg",
        square: "51,7 метри",
        info: "-1 (напівпідвальний) поверх 013. Кабінет правильної прямокутної форми.Покриття лінолеум",
    },
    {
        img: "../images/premises/mobile/014/014_273_322-min.jpg",
        square: "51,5 метри",
        title: "може бути суміжний з 015",
        info: "-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум",
    },
    {
        img: "../images/premises/mobile/015/015_273_322-min.jpg",
        square: "50,7 метри",
        title: "може бути суміжний з 014",
        info: "-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум",
    },
        {
        img: "../images/premises/mobile/016/016_273_322-min.jpg",
        square: "49,5 метри",
        info: "-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум",
    },
]

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
