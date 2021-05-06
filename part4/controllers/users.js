const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const CRUD = require("../utils/crud-methods");

userRouter.route("/")
  .get(async(req,res)=>{
    const users = await User.find({}).populate("blogs");
    res.json(users);
  })
  .post(async(req,res)=>{
    if (req.body?.password.length <=3){
      return res.status(400).json({error: "Minimum length for password is 4 characters"}).end();
    }
    const passwordHash = await bcrypt.hash(req.body?.password, 10);
    const user = {
      username: req.body?.username,
      name: req.body?.name,
      passwordHash
    };
    const data = await CRUD.createDoc(user, User);
    typeof data === "number"?
      res.status(data).end():
      data.error?
        res.status(400).json(data).end():
        res.json(data);
  });


module.exports = userRouter;
