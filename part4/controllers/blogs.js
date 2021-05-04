const blogRouter = require("express").Router();
const CRUD = require("../utils/crud-methods");

blogRouter.route("/")
  .get(async (req,res)=>{
    const data = await CRUD.find();
    res.json(data);
  })
  .post(async (req,res)=>{
    const data = await CRUD.createBlog(req.body);
    typeof data === "number"?
      res.status(data).end():
      data.error?
        res.status(400).json(data).end():
        res.json(data);
  });

blogRouter.route("/:id")
  .get(async (req,res) => {
    const data = await CRUD.findById(req.params.id);
    res.json(data);
  })
  .delete(async(req,res)=>{
    await CRUD.deleteElement(req.params.id);
    res.status(204).end();
  })
  .put(async(req,res)=>{
    const response = await CRUD.updateBlog(req.params.id,req.body);
    typeof response === "number"?
      res.status(response).end():
      response.error?
        res.status(400).json(response).end():
        res.json(response);
  });



module.exports = blogRouter;
