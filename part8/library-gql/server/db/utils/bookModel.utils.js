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
  try {
    const newBook = new BookModel(bookToAdd);
    const book = await newBook.save();
    return [await BookModel.findById(book._id).populate("author"), null];
  } catch ({ message }) {
    return [null, message];
  }
}

async function searchByAuthorAndGenre(author, genre) {
  return (await searchByAuthor(author)).filter((book) =>
    book.genres.includes(genre)
  );
}

async function searchByAuthor(author) {
  const books = await getBooks();
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
