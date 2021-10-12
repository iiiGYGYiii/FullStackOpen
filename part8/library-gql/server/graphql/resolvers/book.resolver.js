/* eslint-disable indent */
const {
  findAuthorByName,
  createAuthor,
} = require("../../db/utils/authorModel.utils");

const {
  getBooks,
  createBook,
  searchByAuthor,
  searchByGenre,
  searchByAuthorAndGenre,
} = require("../../db/utils/bookModel.utils");

async function bookCount() {
  return (await getBooks()).length;
}

async function allBooks(root, args) {
  return args.author && args.genre
    ? await searchByAuthorAndGenre(args.author, args.genre)
    : args.author
    ? await searchByAuthor(args.author)
    : args.genre
    ? await searchByGenre(args.genre)
    : await getBooks();
}

function addBook(root, args) {
  if (!findAuthorByName(args.name)) {
    createAuthor({
      name: args.author,
    });
  }
  const author = findAuthorByName(args.name);
  const book = { ...args, author: author._id };
  createBook(book);
  return book;
}

module.exports = {
  bookCount,
  allBooks,
  addBook,
};
