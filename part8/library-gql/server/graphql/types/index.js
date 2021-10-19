const { gql } = require("apollo-server");

const authorTypes = require("./author.types");
const bookTypes = require("./book.types");
const mutationTypes = require("./mutation.types");
const queriesTypes = require("./queries.types");
const tokenTypes = require("./token.types");
const userTypes = require("./user.types");

const typeDefs = gql`
  ${authorTypes}
  ${bookTypes}
  ${mutationTypes}
  ${queriesTypes}
  ${tokenTypes}
  ${userTypes}
`;

module.exports = typeDefs;
