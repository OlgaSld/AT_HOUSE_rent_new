(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    closePhoto: document.querySelector('.close-photo')
  };
  
  refs.openModalBtn.forEach((button) => {
        button.addEventListener("click", openModal);
    })
  
    refs.closeModalBtn.forEach((button) => {
        button.addEventListener("click", closeModal);
    })

function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add('no-scroll');
    }

function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove('no-scroll');
}
  
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (!refs.modal.classList.contains('is-hidden')) {
        refs.modal.classList.add('is-hidden');
        document.body.classList.remove('modal-open');
        document.body.classList.remove('no-scroll');
      }
    }
  });
})();

