const {
  getAuthors,
  findAuthorByNameAndUpdate,
} = require("../../db/utils/authorModel.utils");
const { getBooks } = require("../../db/utils/bookModel.utils");

async function authorCount() {
  return (await getAuthors()).length;
}

async function allAuthors() {
  return await getAuthors();
}

async function editAuthor(root, args) {
  return await findAuthorByNameAndUpdate(args.name, args);
}

async function bookCount(root) {
  return (await getBooks()).reduce(
    (accumulator, book) =>
      book.author.name === root.name ? accumulator + 1 : accumulator,
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
