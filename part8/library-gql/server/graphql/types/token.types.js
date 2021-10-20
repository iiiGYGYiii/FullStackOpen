const { gql } = require("apollo-server");

const tokenTypes = gql`
  type Token {
    value: String!
  }
`;

module.exports = tokenTypes;
