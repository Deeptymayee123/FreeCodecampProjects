const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
  if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.pause();
  } else {
    btn.classList.add("slide");
    video.play();
  }
});

//pre loader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
