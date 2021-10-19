const { UserInputError } = require("apollo-server-errors");
const {
  addNewUser,
  findByUserName,
} = require("../../db/utils/userModel.utils");
const JWT = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const createUser = async (root, args) => {
  const [userCreated, error] = await addNewUser(args);
  if (error) {
    throw new UserInputError(error, {
      invalidArgs: args,
    });
  }
  return userCreated;
};

const login = async (root, args) => {
  const { userName, password } = args;
  const passwordMatch = password === "secret";
  const [userFound, error] = await findByUserName(userName);
  if (error) {
    throw new UserInputError(error, {
      invalidArgs: args,
    });
  }
  if (!userFound || !passwordMatch) {
    throw new UserInputError("Wrong Credentials");
  }
  const userForToken = {
    username: userFound.userName,
    id: userFound._id,
  };
  return {
    value: JWT.sign(userForToken, JWT_SECRET),
  };
};

const me = (root, args, context) => context.currentUser;

module.exports = {
  createUser,
  login,
  me,
};
