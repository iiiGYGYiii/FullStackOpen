const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  genres: {
    type: [String],
  },
  published: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = model("Book", bookSchema);
