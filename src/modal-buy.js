(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-close]"),
    modal: document.querySelector("[data-modal-buy]"),
  };
 
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
 
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
