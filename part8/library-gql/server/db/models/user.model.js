const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  userName: {
    minlength: 6,
    required: true,
    type: String,
    unique: true,
  },
  favoriteGenre: String,
});

userSchema.plugin(uniqueValidator);

module.exports = model("User", userSchema);
