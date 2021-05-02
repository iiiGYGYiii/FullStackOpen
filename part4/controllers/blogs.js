const blogRouter = require("express").Router();
const CRUD = require("../utils/crud-methods");

blogRouter.route("/")
.get((req,res)=>{
  CRUD.find().then(data => res.json(data));
})
.post((req,res)=>{
  CRUD.createBlog(req.body)
  .then(data => {
    typeof data === "number"?
        res.status(data).end():
        data.error ?
          res.status(400).json(data).end():
          res.json(data);
  })
});

module.exports = blogRouter;
