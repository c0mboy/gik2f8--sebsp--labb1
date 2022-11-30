const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}
//+`/${bookId}`

async function getBooktest() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getBook(id) {
  const result = await fetch(url+"/"+id)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}
// läsa https://raddy.dev/blog/javascript-async-await-fetch-and-display-data-from-api/