"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(bookList));

  let elements = document.getElementsByClassName("book-list__item");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", (e) => {
      var e = window.event;
      let x_pos = e.clientX + 40;
      let y_pos = e.clientY - 70;
      const existingElementBox = `<div id="book-card" class="book-info position: absolute" style="position: absolute; top: ${y_pos}px; left:${x_pos}px;"></div>`;
      root.insertAdjacentHTML("afterbegin", existingElementBox);

      const idbook = e.target.id;
      getBook(idbook).then((yyy) => renderBookItem(yyy));
    });
    elements[i].addEventListener("mouseout", (e) => {
      const existingElementBox = document.getElementById("book-card");
      existingElementBox && existingElementBox.remove(existingElementBox);
    });
  }
}

function renderBookItem(bookList) {
  var e = window.event;
  const insertBooklist = document.getElementById("book-card");

  let minhtml = BookInfo(bookList);
  insertBooklist.insertAdjacentHTML("afterbegin", minhtml);
}
