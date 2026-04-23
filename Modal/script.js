let modalBtn = document.querySelector("#modal-btn");
let container = document.querySelector(".container");
let modalOverlay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
  container.classList.add("blur-effect");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
  container.classList.remove("blur-effect");
});
