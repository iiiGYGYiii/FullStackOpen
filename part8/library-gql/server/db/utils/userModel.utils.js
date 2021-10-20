const { tryPromise } = require("../../utils/global.helper");
const { BookModel, UserModel } = require("../models/index");

async function addNewUser(userToCreate) {
  const newUser = new UserModel(userToCreate);
  return await tryPromise(() => newUser.save());
}

async function findByUserName(userNameToFind) {
  return await tryPromise(() =>
    UserModel.findOne({
      userName: userNameToFind,
    })
  );
}

async function findUserById(id) {
  return await tryPromise(() => UserModel.findById(id));
}

async function fetchUserRecommendations(favoriteGenre) {
  return await tryPromise(() =>
    BookModel.find({ genres: favoriteGenre }).populate("author")
  );
}

module.exports = {
  addNewUser,
  findByUserName,
  findUserById,
  fetchUserRecommendations,
};
