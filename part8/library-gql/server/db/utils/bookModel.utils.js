const { BookModel } = require("../models/index");

async function getBooks() {
  try {
    const allBooks = BookModel.find({}).populate("author");
    return allBooks;
  } catch ({ message }) {
    console.error("There was an error", message);
    return null;
  }
}

async function createBook(bookToAdd) {
  const newBook = new BookModel(bookToAdd);
  return await newBook.save();
}

async function searchByAuthorAndGenre(author, genre) {
  return (await searchByAuthor(author)).filter((book) =>
    book.genres.includes(genre)
  );
}

async function searchByAuthor(author) {
  const books = await getBooks();
  console.log(books);
  return books.filter((book) => book.author.name === author);
}

async function searchByGenre(genre) {
  return await BookModel.find({
    genres: genre,
  }).populate("author");
}

module.exports = {
  getBooks,
  searchByAuthorAndGenre,
  searchByAuthor,
  searchByGenre,
  createBook,
};
