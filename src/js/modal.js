(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtn.forEach((button) => {
        button.addEventListener("click", toggleModal);
    })
      refs.closeModalBtn.addEventListener("click", toggleModal);


function toggleModal(evt) {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll');
    }

    window.addEventListener("keydown", handlerClose);

    function handlerClose(evt) {
        refs.modal.classList.add("is-hidden");
    }
})();

