const { tryPromise } = require("../../utils/global.helper");
const { AuthorModel } = require("../models/index");

async function getAuthors() {
  try {
    const allAuthors = await AuthorModel.find({});
    return allAuthors;
  } catch ({ message }) {
    console.error("There was an error", message);
    return null;
  }
}

async function createAuthor(authorToAdd) {
  const newAuthor = new AuthorModel(authorToAdd);
  const result = await tryPromise(() => newAuthor.save());
  return result;
}

async function findAuthorByName(nameToFind) {
  return await AuthorModel.findOne({ name: nameToFind });
}

async function findAuthorByNameAndUpdate(nameToFind, updatedAuthor) {
  try {
    const authorUpdated = await AuthorModel.findOneAndUpdate(
      { name: nameToFind },
      updatedAuthor,
      {
        new: true,
      }
    );
    return authorUpdated;
  } catch ({ message }) {
    console.error("An error ocurred", message);
    return null;
  }
}

module.exports = {
  getAuthors,
  findAuthorByNameAndUpdate,
  createAuthor,
  findAuthorByName,
};
