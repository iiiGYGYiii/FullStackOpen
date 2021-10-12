const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const authorSchema = new Schema({
  name: {
    minlength: "5",
    required: true,
    type: String,
    unique: true,
  },
  born: {
    required: false,
    type: Number,
  },
});

authorSchema.plugin(uniqueValidator);

module.exports = model("Author", authorSchema);
