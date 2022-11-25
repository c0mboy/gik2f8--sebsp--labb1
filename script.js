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
   

  let elements = document.getElementsByClassName('childLi');
  for (let i=0; i < elements.length; i++){
      elements[i].addEventListener('mouseover', (e)=> {
        console.log("Hej")
        renderBookItem(bookList)
      });
      elements[i].addEventListener('mouseout', (e)=> {
        console.log("Hejdå")
        const existingElement = document.querySelector('.book-info');
        existingElement && existingElement.remove() // Om det finns en book-info ta bort den
      });
  }
};

function renderBookItem(bookList){
  //const existingElement = document.querySelector('.book-list');
  const insert = document.querySelector('.book-list');
  let minhtml = BookInfoTest(bookList) //Hämtar Html från BookInfo

  insert.insertAdjacentHTML('afterbegin', minhtml) //lägger in den efter hmtl=minhtml after begining
}


