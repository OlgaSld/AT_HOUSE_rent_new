(()=>{const e={openMenuBtn:document.querySelectorAll("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),link:document.querySelector(".mob-menu-list")};function s(){e.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.link.addEventListener("click",(function(){e.menu.classList.add("is-hidden")})),e.openMenuBtn.forEach((e=>{e.addEventListener("click",s)})),e.closeMenuBtn.addEventListener("click",s)})();document.querySelector(".block-photo-premises").insertAdjacentHTML("beforeend",[{img:"../images/premises/013_mob/013_273_322-min.jpg",square:"51,7 метри",info:"-1 (напівпідвальний) поверх 013. Кабінет правильної прямокутної форми.Покриття лінолеум"},{img:"../images/premises/014_mob/014_273_322-min.jpg",square:"51,5 метри",title:"може бути суміжний з 015",info:"-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум"},{img:"../images/premises/015_mob/015_273_322-min.jpg",square:"50,7 метри",title:"може бути суміжний з 014",info:"-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум"},{img:"../images/premises/016_mob/016_273_322-min.jpg",square:"49,5 метри",info:"-1 (напівпідвальний) поверх. Кабінет правильної прямокутної форми.Покриття лінолеум"}].map((({img:e,square:s,title:i,info:n})=>`<li class="free-premices-item">\n        <img class="free-premises-img" src="${e}" alt="${s}" width="273" height="322"/>\n        <div class="wrapper-text">\n        <p class="free-premises-sq">${s}</p>\n        <p class="free-premises-title">${i}</p>\n        <p class="free-premises-info">${n}</p>\n        </div>\n        <button class="more-detail">Фотографії</button>\n        </li>`)).join(""));const e={text:document.querySelector(".about-info"),openMore:document.querySelector(".read-more"),hiddenText:document.querySelector(".hidden-text"),closeMore:document.querySelector(".close-more")};e.hiddenText.classList.add("visually-hidden"),e.openMore.addEventListener("click",(function(){e.hiddenText.classList.remove("visually-hidden"),e.closeMore.classList.remove("visually-hidden"),e.openMore.classList.add("visually-hidden")})),e.closeMore.addEventListener("click",(function(){e.hiddenText.classList.add("visually-hidden"),e.closeMore.classList.add("visually-hidden"),e.openMore.classList.remove("visually-hidden")}));
//# sourceMappingURL=index.dd5b47e7.js.map
