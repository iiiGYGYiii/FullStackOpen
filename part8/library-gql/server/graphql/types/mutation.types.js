const { gql } = require("apollo-server");

const mutationTypes = gql`
  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int
      genres: [String!]!
    ): Book
    editAuthor(name: String!, born: Int!): Author
    createUser(userName: String!, favoriteGenre: String!): User
    login(userName: String!, password: String!): Token
  }
`;

module.exports = mutationTypes;
