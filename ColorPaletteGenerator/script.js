const container = document.querySelector(".container");
const btn = document.querySelector("#generate-btn");
const colorBox = document.querySelectorAll(".color-box");
const copyBtn = document.querySelectorAll(".copy-btn");

btn.addEventListener("click", function () {
  let array = ranadomColorGenerator();
  let index = 0;
  colorBox.forEach((box) => {
    const Color = box.querySelector(".color");
    const hexCode = box.querySelector(".hex-value");
    Color.style.backgroundColor = array[index];
    hexCode.textContent = array[index];
    index++;
  });
});

copyBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const hexCode = btn.parentElement.querySelector(".hex-value").textContent;
    console.log(btn);
    console.log(btn.parentElement);

    navigator.clipboard.writeText(hexCode);
    alert("Coppied! " + hexCode);
  });
});

function ranadomColorGenerator() {
  const regxOfColor = "0123456789ABCDEF";

  let colorArr = [];
  for (let j = 0; j < 5; j++) {
    let col = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      col += regxOfColor[index];
    }
    // console.log(col);
    colorArr.push(col);
  }
  return colorArr;
}
