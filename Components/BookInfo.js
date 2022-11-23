const BookInfo = (book) => {
    let html = `
            <div class="rounded-md border-2 border-blue-400 bg-white w-full mx-auto w-40">
            <div class="">
            <div class="">
                <div class="">
                <img src=    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstephenking.com%2Fpromo%2Fdark-tower-2016-collection%2Fimages%2Fthe_gunslinger.jpg"/>
                <div class="">
                    <span class="">Author: ${book.title} </span>
                    <span class="">Title: ${book.author}</span>
                    <span class="">Pages: ${book.pages}</span>
                    <span class="">Release Date: ${book.releaseDate}</span
                </div> 
                </div>
            </div>
            </div>
        </div>`;
        return html;
  };
  