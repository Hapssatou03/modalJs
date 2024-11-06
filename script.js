'use strict';
//selection des éléments

const btnsModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");

function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener("click", () => {
    open();
  });
}

overlay.addEventListener("click", () => {
  close();
});

btnClose.addEventListener("click", (e) => {
  close();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
  }
});
