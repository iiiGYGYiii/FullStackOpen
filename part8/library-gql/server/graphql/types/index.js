const { gql } = require("apollo-server");

const bookTypes = require("./book.types");
const authorTypes = require("./author.types");
const mutationTypes = require("./mutation.types");
const queriesTypes = require("./queries.types");

const typeDefs = gql`
  ${bookTypes}
  ${authorTypes}
  ${mutationTypes}
  ${queriesTypes}
`;

module.exports = typeDefs;
