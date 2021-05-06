const blogRouter = require("express").Router();
const CRUD = require("../utils/crud-methods");
const blogCRUD = require("../utils/blogs-crud");
const userCRUD = require("../utils/userCRUD");
const Blog = require("../models/blog");

blogRouter.route("/")
  .get(async (req,res)=>{
    const data = await blogCRUD.read({});
    res.json(data);
  })
  .post(async (req,res)=>{
    if (!req.user){
      return res.status(401).json({error: "must be logged to create blog"}).end();
    }
    const newBlog = {
      ...req.body,
      user: req.user.id
    };
    const data = await CRUD.createDoc(newBlog, Blog);
    userCRUD.addBlogId(req.user.id, data._id);
    typeof data === "number"?
      res.status(data).end():
      data.error?
        res.status(400).json(data).end():
        res.json(data);
  });

blogRouter.route("/:id")
  .get(async (req,res) => {
    const data = await blogCRUD.read({_id: req.params.id});
    res.json(data);
  })
  .delete(async(req,res)=>{
    await CRUD.deleteElement(req.params.id, Blog, req.user);
    res.status(204).end();
  })
  .put(async(req,res)=>{
    const response = await CRUD.updateDoc(req.params.id,req.body, Blog, req.user);
    typeof response === "number"?
      res.status(response).end():
      response.error?
        res.status(400).json(response).end():
        res.json(response);
  });



module.exports = blogRouter;