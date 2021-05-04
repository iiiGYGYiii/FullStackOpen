const unknownEndpoint = (req,res,next)=>{
  res.send("<h2> 404 Not Found</h2>");
  next();
};

module.exports={
  unknownEndpoint
};
