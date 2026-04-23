let sidebar = document.querySelector(".sidebar");
let sidebarToggle = document.querySelector(".sidebar-toggle");
let closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  console.log(sidebar.classList);
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  console.log(sidebar.classList);
});
