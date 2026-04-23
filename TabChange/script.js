const tabBtns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  console.log(e);

  const id = e.target.dataset.id;
  if (id) {
    //remove active from other buttons
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    article.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
