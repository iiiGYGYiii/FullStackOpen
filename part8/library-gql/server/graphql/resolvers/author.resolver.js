const {
  getAuthors,
  findAuthorByNameAndUpdate,
} = require("../../utils/authors.data");
const { getBooks } = require("../../utils/books.data");

function authorCount() {
  return getAuthors().length;
}

function allAuthors() {
  return getAuthors();
}

function editAuthor(root, args) {
  if (!getAuthors().find((author) => author.name === args.name)) return null;
  const foundAuthor = getAuthors().find((author) => author.name === args.name);
  const newAuthor = { ...foundAuthor, ...args };
  findAuthorByNameAndUpdate(args.name, newAuthor);
  return newAuthor;
}

function bookCount(root) {
  return getBooks().reduce(
    (accumulator, book) =>
      book.author === root.name ? accumulator + 1 : accumulator,
    0
  );
}

const author = {
  bookCount,
};

module.exports = {
  authorCount,
  allAuthors,
  editAuthor,
  author,
};
