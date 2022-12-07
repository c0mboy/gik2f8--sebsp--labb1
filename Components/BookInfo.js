const BookInfo = (book) => {
    let html = 
        `    
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg bg-gradient-to-tr from-sky-300 to-fuchsia-500">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="${book.coverImage}"/ alt="" />
            <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Title: ${book.title}</h5>
            <p class="text-gray-700 text-base mb-4">
            Author: ${book.author}</p>
            <p class="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi sem, dictum quis euismod nec,
            rutrum a sem. Praesent in interdum ex. Aliquam dui purus, volutpat sed consectetur sollicitudin,
            interdum id diam. Donec nisl quam, faucibus et bibendum vitae, posuere sed risus.</p>
            <p class="text-gray-700 text-xs">Pages: ${book.pages}</p>
            <p class="text-gray-600 text-xs">Release Date: ${book.releaseDate}</p>
            </div>
        </div>
        `;
       return html;
};
