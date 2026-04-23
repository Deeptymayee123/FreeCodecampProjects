const btn = document.querySelector("#btn");
const userInput = document.querySelector(".userInput");
const errorText = document.querySelector(".show-error-text");
const list = document.querySelector(".list");
const successMsg = document.querySelector(".confirm-text");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");

btn.addEventListener("click", function () {
  let val = userInput.value;
  console.log(val);

  if (val === "") {
    errorText.innerHTML = "Please, enter any item";
    //console.log(errorText.innerHTML);
  } else {
    const li = document.createElement("li");
    li.classList.add("liList");
    li.innerHTML = `
    <span class="text">${val}</span>
    <div class="btn-container">
    <div class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></div>
    <div class="delete-btn"><i class="fa-solid fa-delete-left"></i></div>
    </div>
    `;

    //${val}<i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-delete-left"></i>
    list.appendChild(li);
    //console.log(li);

    userInput.value = "";
    errorText.innerHTML = "";
    successMsg.innerHTML = "Item added successfully!";
    btn.innerHTML = "Added";
    setTimeout(function () {
      successMsg.innerHTML = "";
      btn.innerHTML = "Submit";
    }, 1000);
  }
});

list.addEventListener("click", function (e) {
  const li = e.target.closest(".liList");
  if (!li) return;

  // DELETE
  if (e.target.closest(".delete-btn")) {
    li.remove();
    successMsg.innerHTML = "Item deleted!";
    setTimeout(() => (successMsg.innerHTML = ""), 1000);
    // localStorage.setItem("groceryList", li.innerHTML);
  }

  // EDIT
  if (e.target.closest(".edit-btn")) {
    const textSpan = li.querySelector(".text");
    userInput.value = textSpan.innerText;

    // remove old item
    li.remove();

    successMsg.innerHTML = "Successfully, Edited the item";
    setTimeout(() => (successMsg.innerHTML = ""), 1500);
    // localStorage.setItem("groceryList", li.innerHTML);
  }
  // console.log(li.querySelector(".text").innerHTML);

  // localStorage.setItem("groceryList", li.innerHTML);
});

// function saveData() {
//   localStorage.setItem("gloceryList");
// }
// window.addEventListener("DOMContentLoaded", function () {
//   list.innerHTML = localStorage.getItem("groceryList") || "";
// });
