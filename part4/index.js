const http = require("http");
const logger = require("./utils/logger");
const app = require("./app");
const config = require("./utils/config");

const server = http.createServer(app);

server.listen(config.PORT || 3001, () =>{
  logger.info(`Server running on PORT: ${config.PORT || 3001}`);
});
