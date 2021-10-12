const server = require("./graphql/index");

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
