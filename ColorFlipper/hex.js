let text = document.querySelector(".color");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  // setInterval(() => {
  let letter = "0123456789ABCDEF";

  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  text.innerHTML = color;
  document.body.style.backgroundColor = color;
  // }, 1000);
});
