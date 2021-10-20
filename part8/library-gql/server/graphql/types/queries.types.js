const { gql } = require("apollo-server");

const queriesTypes = gql`
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
    userRecommendations: [Book!]!
  }
`;

module.exports = queriesTypes;
