(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    link: document.querySelector('.mob-menu-list'),
  };

  refs.link.addEventListener('click', onClose);

  refs.openMenuBtn.forEach(el => {
    el.addEventListener('click', toggleMenu);
  });

  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    // document.body.classList.toggle('no-scroll');
  }

  function onClose() {
    refs.menu.classList.add('is-hidden');
  }
})();
