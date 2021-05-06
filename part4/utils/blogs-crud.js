const Blog = require("../models/blog.js");

const read = async (filter={}) =>{
  const result = await Blog
    .find(filter)
    .populate("user", {username: true, name: true});
  return result;
};

module.exports = {
  read
};
