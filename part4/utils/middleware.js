const jwt = require("jsonwebtoken");

const unknownEndpoint = (req,res,next)=>{
  res.send("<h2> 404 Not Found</h2>");
  next();
};

const tokenExtractor = (req, res, next) =>{
  req.token = req.get("authorization");
  next();
};

const userExtractor = (req,res, next) =>{
  const token = (req.token && req.token.toLowerCase().startsWith("bearer ")) && req.token.substring(7);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);  
    req.user = decodedToken;
  } catch (error) {
    req.user = null;
  } finally{
    next();
  }
};

module.exports={
  unknownEndpoint,
  tokenExtractor,
  userExtractor
};
