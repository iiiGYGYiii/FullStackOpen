require("dotenv").config();

const MONGODB_URI = process.env.NODE_ENV === "test"?
  process.env.TEST_MONGODB_URI:
  process.env.LOCAL_MONGODB;

module.exports = {
  MONGODB_URI
};
