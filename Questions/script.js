let plusIcons = document.querySelectorAll(".plus-icon");
let minusIcons = document.querySelectorAll(".minus-icon");
let questionText = document.querySelectorAll(".question-text");
const questions = document.querySelectorAll(".question");

plusIcons.forEach((plusIcon, index) => {
  plusIcon.addEventListener("click", function () {
    questionText[index].classList.add("show-text");
    plusIcon.classList.add("hide-plusIcon");
    minusIcons[index].classList.add("show-minusIcon");
  });
});

minusIcons.forEach((minusIcon, index) => {
  minusIcon.addEventListener("click", function () {
    questionText[index].classList.remove("show-text");
    plusIcons[index].classList.remove("hide-plusIcon");
    minusIcon.classList.remove("show-minusIcon");
  });
});
