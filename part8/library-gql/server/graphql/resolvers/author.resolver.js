const { UserInputError, AuthenticationError } = require("apollo-server-errors");
const {
  getAuthors,
  findAuthorByNameAndUpdate,
} = require("../../db/utils/authorModel.utils");
const { getBooks } = require("../../db/utils/bookModel.utils");
const { tryPromise } = require("../../utils/global.helper");

async function authorCount() {
  return (await getAuthors()).length;
}

async function allAuthors() {
  return await getAuthors();
}

async function editAuthor(root, args, { currentUser }) {
  if (!currentUser) throw new AuthenticationError("User is not authenticated");
  const [data, error] = await tryPromise(() =>
    findAuthorByNameAndUpdate(args.name, args)
  );
  if (error) {
    throw new UserInputError(error);
  }
  return data;
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
