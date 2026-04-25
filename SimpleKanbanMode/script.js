const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragleave);
  list.addEventListener("drop", dragdrop);
}

function dragStart(e) {
  //thisallows the drop down location to know which element is being moved when you release it.
  e.dataTransfer.setData("text/plain", this.id);
}
function dragEnd() {
  console.log("drag end");
}
function dragOver(e) {
  //this line is important bacause browser is not allow you to drop elements onto other elements.
  e.preventDefault();
  //   this.classList.remove("over");
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}
function dragdrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.querySelector("#" + id);
  this.appendChild(card);
  this.classList.remove("over");
}
function dragleave() {
  this.classList.remove("over");
}
