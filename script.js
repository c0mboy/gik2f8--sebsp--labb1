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

//console.log("getAll",getAll());
//console.log("getBook",getBook());


//---- Test
//const promise = getBook();
//promise.then((value) => console.log("Value 1", value[1]));
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
      //console.log("Hej")
      //måste lyssna efter id för att sedan skicka det till getbook()
      var e = window.event;
      let x_pos = e.clientX +40;
      let y_pos = e.clientY -70;
      const existingElementBox = `<div id="card" class="book-info position: absolute" style="position: absolute; top: ${y_pos}px; left:${x_pos}px;"></div>`;
      root.insertAdjacentHTML('afterbegin', existingElementBox);
      //console.log("Hämtar id", idbook)
      //------Hämtar tbx en specifik bok från API----------
      //const answer = getBook(idbook).then((yyy) => renderBookItem(yyy));
      const idbook = e.target.id;
      getBook(idbook).then((yyy) => renderBookItem(yyy));
      // Skickar ut den som en specfik book med array till BookInfo 
      //answer.then((yyy) => renderBookItem(yyy));
      //renderBookItem(value)
      });
      elements[i].addEventListener('mouseout', (e)=> {
        //console.log("Hejdå")
        const existingElementBox = document.querySelector('.book-info'); //visar vad book-info är 
        existingElementBox.remove() // Om det finns en book-info ta bort den
      });
  }
};

function renderBookItem(bookList){
  var e = window.event;
  //let x_pos = e.clientX
  //let y_pos = e.clientY
  const insert = document.getElementById('card'); // hämtar html från booklist.js
  let minhtml = BookInfoTest(bookList) //Hämtar Html från BookInfo.js
  insert.insertAdjacentHTML('afterbegin', minhtml) //lägger in den efter hmtl=minhtml after begining
}


