require("dotenv").config();

const MONGODB_URI = process.env.LOCAL_MONGODB;

module.exports = {
  MONGODB_URI
}
