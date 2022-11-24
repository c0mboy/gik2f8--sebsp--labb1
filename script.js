'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
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
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  
  document.addEventListener("mouseover", myFunction);
  
  function myFunction() {
    console.log("heheheh")
    document.getElementById('pointer').innerHTML = "Moused over!"
    //const insert = document.getElementById('insert');
  }

  
}
// document.querySelector('.pointer').addEventListener("mouseover", mouseOver);
// document.querySelector('.pointer').addEventListener("mouseout", mouseOut);

// function mouseOver() {
  //   document.getElementById("demo").style.color = "red";
  //   console.log("hey")
  // }
  
  // function mouseOut() {
    //   document.getElementById("demo").style.color = "black";
    //   console.log("då")
    // }
    
    
// function renderBookItem(book){
//   console.log("hej", book)
//   const existingElement = document.querySelector('.book-info');
//   const insert = document.getElementById('insert');
  
//   existingElement && insert.removeChild(existingElement);

//   // let minhtml = BookInfoTest(book)
//   // insert.insertAdjacentHTML('afterbegin', minhtml)
// }



