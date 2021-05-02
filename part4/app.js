const config = require("./utils/config");
const express = require("express");
const blogRouter = require("./controllers/blogs");
const middleware = require("./utils/middleware");
const morgan = require("morgan");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const app = express();

morgan.token("body", req => JSON.stringify(req.body));

logger.info("Connecting to MongoDB");
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() =>{
    logger.info("Connected successfully to MongoDB!");
  })
  .catch(e => {
    logger.error("Error connecting to MongoDB: ", e.message);
  });

app.use(express.json());

app.use(morgan(":method :url :status - :response-time ms :body"));

app.use("/api/blogs", blogRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;
