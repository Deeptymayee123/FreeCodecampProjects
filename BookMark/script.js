const bookmarkName = document.querySelector("#bookmark-name");
const bookmarkUrl = document.querySelector("#bookmark-url");
const AddedBookmark = document.querySelector("#Added-bookmark");
const AllBookMarks = document.querySelector("#All-Book-Mark");

document.addEventListener("DOMContentLoaded", loadAllBookMarks);

AddedBookmark.addEventListener("click", function () {
  let name = bookmarkName.value.trim();
  let url = bookmarkUrl.value.trim();

  if (!name || !url) {
    alert("Please enter Bookmark name and url!");
    return;
  } else if (!name.startsWith("http://") && !url.startsWith("https://")) {
    alert("Please enter valid url startng with either http:// or https://");
    return;
  }
  AddBookmark(name, url);
  saveBookmark(name, url);
  bookmarkName.value = "";
  bookmarkUrl.value = "";
});

function AddBookmark(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.href = url;
  link.textContent = name;
  link.target = "_blank";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    AllBookMarks.removeChild(li);
    removeBookMarkStore(name, url);
  });

  li.appendChild(link);
  li.appendChild(removeBtn);
  AllBookMarks.appendChild(li);
}

function saveBookmark(name, url) {
  const bookmarks = getBookMarksFromStore();
  bookmarks.push({ name, url });
  //localStorage.setItem(key, value);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
function getBookMarksFromStore() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}
function removeBookMarkStore(name, url) {
  let bookmarks = getBookMarksFromStore();
  bookmarks = bookmarks.filter((bookmark) => {
    return bookmark.name !== name || bookmark.url !== url;
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadAllBookMarks() {
  const bookMarks = getBookMarksFromStore();
  bookMarks.forEach((bookMark) => {
    AddBookmark(bookMark.name, bookMark.url);
  });
}
