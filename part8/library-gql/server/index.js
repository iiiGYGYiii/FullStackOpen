require("dotenv").config();

const server = require("./graphql/index");
const makeDBConnection = require("./db/index");

server.listen().then(({ url }) => {
  makeDBConnection();
  console.log(`Server ready at ${url}`);
});
