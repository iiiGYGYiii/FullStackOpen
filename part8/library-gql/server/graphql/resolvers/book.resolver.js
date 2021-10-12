/* eslint-disable indent */
const { v1: uuid } = require("uuid");

const {
  searchByAuthorAndGenre,
  searchByAuthor,
  searchByGenre,
} = require("../../utils/search.helper.js");

let { getBooks, appendBookToBooks } = require("../../utils/books.data.js");
const { getAuthors, appendToAuthors } = require("../../utils/authors.data");

function bookCount() {
  return getBooks().length;
}

function allBooks(root, args) {
  return args.author && args.genre
    ? searchByAuthorAndGenre(getBooks(), args.author, args.genre)
    : args.author
    ? searchByAuthor(getBooks(), args.author)
    : args.genre
    ? searchByGenre(getBooks(), args.genre)
    : getBooks();
}

function addBook(root, args) {
  if (
    !getAuthors()
      .map((author) => author.name)
      .includes(args.author)
  ) {
    appendToAuthors({
      name: args.author,
      id: uuid(),
    });
  }
  const book = { ...args, id: uuid() };
  appendBookToBooks(book);
  return book;
}

module.exports = {
  bookCount,
  allBooks,
  addBook,
};
