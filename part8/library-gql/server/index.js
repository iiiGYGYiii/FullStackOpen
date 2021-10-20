require("dotenv").config();

const server = require("./graphql/index");
const makeDBConnection = require("./db/index");

server.listen().then(({ url, subscriptionsUrl }) => {
  makeDBConnection();
  console.log(`Server ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});
