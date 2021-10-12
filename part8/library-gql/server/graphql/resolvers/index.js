const {
  allAuthors,
  authorCount,
  editAuthor,
  author,
} = require("./author.resolver");
const { allBooks, bookCount, addBook } = require("./book.resolver");

const resolvers = {
  Query: {
    bookCount,
    authorCount,
    allAuthors,
    allBooks,
  },
  Author: {
    bookCount: author.bookCount,
  },
  Mutation: {
    addBook,
    editAuthor,
  },
};

module.exports = resolvers;
