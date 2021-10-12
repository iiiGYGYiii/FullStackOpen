const { gql } = require("apollo-server");

const authorTypes = gql`
  type Author {
    name: String!
    born: Int
    id: ID!
    bookCount: Int
  }
`;

module.exports = authorTypes;
