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
  },
  title: {
    minlength: 5,
    type: String,
    required: true,
  },
});

module.exports = model("Book", bookSchema);
