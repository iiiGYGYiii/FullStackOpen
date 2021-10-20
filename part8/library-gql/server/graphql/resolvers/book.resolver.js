/* eslint-disable indent */
const { UserInputError, AuthenticationError } = require("apollo-server");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

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
const { tryPromise } = require("../../utils/global.helper");

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

async function addBook(root, args, { currentUser }) {
  if (!currentUser) throw new AuthenticationError("User is not authenticated");
  let [authorData, authorError] = await tryPromise(() =>
    findAuthorByName(args.author)
  );
  if (!authorData) {
    [authorData, authorError] = await createAuthor({ name: args.author });
    if (authorError) {
      throw new UserInputError(authorError, {
        invalidArgs: args,
      });
    }
  }
  const book = { ...args, author: authorData._id };
  const [bookData, bookError] = await createBook(book);
  if (bookError) {
    throw new UserInputError(bookError, {
      invalidArgs: args,
    });
  }
  pubsub.publish("BOOK_ADDED", {
    bookAdded: bookData,
  });
  return bookData;
}

const bookAdded = {
  subscribe: () => pubsub.asyncIterator(["BOOK_ADDED"]),
};

module.exports = {
  bookCount,
  allBooks,
  addBook,
  bookAdded,
};
