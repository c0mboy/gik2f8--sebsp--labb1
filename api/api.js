const url = "https://gik2f8-labs.herokuapp.com/books";

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getBook(id) {
  const result = await fetch(url + "/" + id)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}
