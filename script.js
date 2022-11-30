'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

//------------Test------------------
// let bookOver = [];

// window.addEventListener('load', () => {
//   getBook().then((apiBooksOver) => (bookOver = apiBooksOver));
// });

console.log("getAll",getAll());
console.log("getBook",getBook());


//---- Test
const promise = getBook();
promise.then((value) => console.log("Value 1", value[1]));
//promise.then(() => console.log(value[1]));
//-------------------------------

//---- Test
//const promiseE = getBooktest();
//promiseE.then((value) => console.log("Value 1", value[idbook]));
//promise.then(() => console.log(value[1]));
//-------------------------------



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
   
  
  
  let elements = document.getElementsByClassName('childLi'); // skapar en variabel med html från boklistitem
  for (let i=0; i < elements.length; i++){ //skpar en loop för all elements som ligger i li
    elements[i].addEventListener('mouseover', (e)=> { //när du mouseover ett av li element i li elementen skrivs nedanstående ut
      console.log("Hej")
      //måste lyssna efter id för att sedan skicka det till getbook()
      const idbook = e.target.id;
      console.log("Hämtar id", idbook)
      //------Hämtar tbx en specifik bok från API----------
      const answer = getBook(idbook);
      // Skickar ut den som en specfik book med array till BookInfo 
      answer.then((yyy) => renderBookItem(yyy));
      //renderBookItem(value)
      });
      elements[i].addEventListener('mouseout', (e)=> {
        console.log("Hejdå")
        const existingElement = document.querySelector('.book-info'); //visar vad book-info är 
        existingElement && existingElement.remove() // Om det finns en book-info ta bort den
      });
  }
};

function renderBookItem(bookList){
  const insert = document.querySelector('.book-list'); // hämtar html från booklist.js
  let minhtml = BookInfoTest(bookList) //Hämtar Html från BookInfo.js

  insert.insertAdjacentHTML('afterbegin', minhtml) //lägger in den efter hmtl=minhtml after begining
}


