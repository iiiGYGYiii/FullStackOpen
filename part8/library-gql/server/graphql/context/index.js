const { UserInputError } = require("apollo-server-errors");
const JWT = require("jsonwebtoken");
const { findUserById } = require("../../db/utils/userModel.utils");

const { JWT_SECRET } = process.env;

const context = async ({ req }) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    try {
      const decodedToken = JWT.verify(auth.substring(7), JWT_SECRET);
      const [currentUser, error] = await findUserById(decodedToken.id);
      if (error) throw new UserInputError("User error");
      return { currentUser };
    } catch (error) {
      return {
        currentUser: null,
      };
    }
  }
};

module.exports = context;
