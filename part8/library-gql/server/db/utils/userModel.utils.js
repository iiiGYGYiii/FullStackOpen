const { tryPromise } = require("../../utils/global.helper");
const { UserModel } = require("../models/index");

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

module.exports = {
  addNewUser,
  findByUserName,
  findUserById,
};
