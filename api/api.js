const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getBook() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}
// läsa https://raddy.dev/blog/javascript-async-await-fetch-and-display-data-from-api/