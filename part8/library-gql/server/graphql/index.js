const { ApolloServer } = require("apollo-server");

const typeDefs = require("./types/index");
const resolvers = require("./resolvers/index");
const context = require("./context/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

module.exports = server;
