const bookmarkName = document.querySelector("#bookmark-name");
const bookmarkUrl = document.querySelector("#bookmark-url");
const addBookmarkBtn = document.querySelector("#added-bookmark");
const bookmarkList = document.querySelector("#bookmark-list");

//for storing the value in localstorage, so after refresh we can check
document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkName.value.trim();
  const url = bookmarkUrl.value.trim();

  if (!name || !url) {
    alert("Please, enter both name and url");
    return;
  } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
    alert("Please enter a valid URL starting with http:// or https://");
    return;
  }
  addBookmark(name, url);
  saveBookmark(name, url);
  bookmarkName.value = "";
  bookmarkUrl.value = "";
});

function addBookmark(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.target = "_blank";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });
  li.appendChild(link);
  li.appendChild(removeBtn);
  bookmarkList.appendChild(li);
  //console.log(bookmarkList.appendChild(li));
}

function getBookmarksfromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url) {
  const bookmarks = getBookmarksfromStorage();
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const bookmarks = getBookmarksfromStorage();
  bookmarks.forEach((bookmark) => {
    addBookmark(bookmark.name, bookmark.url);
  });
}

function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarksfromStorage();
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url,
  );
  // localStorage.setItem("bookmark", JSON.stringify(bookmarks));
}
