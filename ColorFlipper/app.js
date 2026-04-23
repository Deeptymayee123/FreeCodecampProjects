let text = document.querySelector(".color");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  // setInterval(() => {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  let color = `rgb(${val1},${val2},${val3})`;
  text.innerHTML = color;
  document.body.style.backgroundColor = color;
  console.log(color);
  //  }, 1000);
});
