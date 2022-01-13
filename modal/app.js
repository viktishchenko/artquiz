const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

function openModalFunction() {
  modalOverlay.classList.add("open-modal");
}

function closeModalFunction() {
  modalOverlay.classList.remove("open-modal");
}

modalBtn.addEventListener("click", openModalFunction);
closeBtn.addEventListener("click", closeModalFunction);
