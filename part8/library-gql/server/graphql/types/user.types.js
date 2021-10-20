const { gql } = require("apollo-server");

const userTypes = gql`
  type User {
    favoriteGenre: String!
    id: ID!
    userName: String!
  }
`;

module.exports = userTypes;
