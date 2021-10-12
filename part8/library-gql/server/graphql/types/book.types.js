const { gql } = require("apollo-server");

const bookTypes = gql`
  type Book {
    author: Author!
    genres: [String!]!
    id: ID!
    published: Int!
    title: String!
  }
`;

module.exports = bookTypes;
