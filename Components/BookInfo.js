const BookInfo = (book) => {
    let html = `
            <div class="rounded-md border-2 border-blue-400 bg-white w-full mx-auto w-40">
            <div class="">
            <div class="">
                <div class="">
                <img src=    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstephenking.com%2Fpromo%2Fdark-tower-2016-collection%2Fimages%2Fthe_gunslinger.jpg"/>
                <div class="">
                    <span class="">Author: ${book.author} </span>
                    <span class="">Title: ${book.title}</span>
                    <span class="">Pages: ${book.pages}</span>
                    <span class="">Release Date: ${book.releaseDate}</span
                </div> 
                </div>
            </div>
            </div>
        </div>`;
        return html;
  };
  
const BookInfoTest = (book) => {
    let html = `
        <div class="book-info flex justify-center position: absolute z-2">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg bg-gradient-to-tr from-sky-300 to-fuchsia-500">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src= "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstephenking.com%2Fpromo%2Fdark-tower-2016-collection%2Fimages%2Fthe_gunslinger.jpg"/ alt="" />
            <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Title: ${book.title}</h5>
            <p class="text-gray-700 text-base mb-4">
            Author: ${book.author}</p>
            <p class="text-gray-700 text-xs">Release Pages: ${book.pages}</p>
            <p class="text-gray-600 text-xs">Release Date: ${book.releaseDate}</p>
            </div>
        </div>
        </div>`;
       return html;
};

const BookInfoTestLu = (book) => {
    let html = 
    `<li
    class="book-list__item mb-2 mx-2 last:mb-0 p-3 
    text-indigo-900 last:border-b-0 border-b 
    border-indigo-700 cursor-pointer">
  ${book.author} - ${book.title}    
  </li>`;
       return html;
};