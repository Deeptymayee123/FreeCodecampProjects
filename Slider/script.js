let slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

nextBtn.addEventListener("click", function () {
  count++;
});

prevBtn.addEventListener("click", function () {
  count--;
});

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
