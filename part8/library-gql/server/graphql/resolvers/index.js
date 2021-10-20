const {
  allAuthors,
  authorCount,
  editAuthor,
  author,
} = require("./author.resolver");
const { allBooks, bookCount, addBook, bookAdded } = require("./book.resolver");
const {
  createUser,
  login,
  me,
  userRecommendations,
} = require("./user.resolver");

const resolvers = {
  Query: {
    bookCount,
    authorCount,
    allAuthors,
    allBooks,
    me,
    userRecommendations,
  },
  Author: {
    bookCount: author.bookCount,
  },
  Mutation: {
    addBook,
    editAuthor,
    createUser,
    login,
  },
  Subscription: {
    bookAdded,
  },
};

module.exports = resolvers;
