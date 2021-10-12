const mongoose = require("mongoose");

async function makeDBConnection() {
  console.log("CONNECTING TO DATABASE...");
  try {
    await mongoose.connect(process.env.MONGODB_TEST_URI);
    console.log("CONNECTION TO DB WAS SUCCESSFUL");
  } catch (error) {
    console.error("An error has ocurred", error.message);
  }
}

module.exports = makeDBConnection;
