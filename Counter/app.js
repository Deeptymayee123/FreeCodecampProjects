let value = document.querySelector("#value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let btns = document.querySelectorAll(".btn");

let count = 0;
let increaseId;
let decreaseId;
let color;

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
      color = numberColor(count);
    } else if (styles.contains("decrease")) {
      count--;
      color = numberColor(count);
    } else {
      count = 0;
      color = numberColor(count);
    }
    value.textContent = count;
    value.style.color = color;
    console.log(count);
    console.log(color);
  });
});

// increase.addEventListener("click", function () {
//   count += 1;
//   value.innerHTML = count;
//   color = numberColor(count);
//   value.style.color = color;
//   console.log(count);
// });

// decrease.addEventListener("click", function () {
//   count -= 1;
//   color = numberColor(count);

//   value.innerHTML = count;
//   value.style.color = color;
//   console.log(count);
// });

// reset.addEventListener("click", function () {
//   //   clearInterval(increaseId);
//   //   clearInterval(decreaseId);
//   color = numberColor(count);

//   value.innerHTML = 0;
//   value.style.color = color;
//   //   value.style.color = "black";
//   console.log(value.innerHTML);
// });

function numberColor(count) {
  if (count < 0) {
    return "red";
  } else if (count > 0) {
    return "green";
  } else {
    return "black";
  }
}
