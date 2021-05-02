const Blog = require("../models/blog.js");

/**
 * Store a given data to the DB. If item exists, return an error.
 * When data is invalid by its content, will return 400.
 |* @param {JSON} data Data to store on the DB.
 * @returns A promise. If succeed, the data stored, else an status code.
 */
 const createBlog = async (data) =>{
  try {
    const blog = new Blog(data);
    return await blog.save();
  } catch (e) {
    return e.name === "ValidationError"? {error: e.message}: 400;
  }
};

  /**
 * Search on DB given a query. Retrieves all if filter is not given.
 * @param {JSON} filter Query filter to search on DB, if not given returns all data.
 * @returns A promise of found data
 */
const find = async (filter={}) =>{
  const result = await Blog.find(filter);
  return result;
};

module.exports = {
  find,
  createBlog
}