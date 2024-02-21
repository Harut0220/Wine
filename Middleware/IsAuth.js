import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  if(!req.headers.authorization){
    return res.send({message:"User not Logged"})
  }
  //   const token = req.cookies.token;
  const token = req.headers.authorization.split(" ")[1];

 
  const decode = jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.send({ message: err });
    else {
      req.user = user;

      next();
    }
  });
};

export default isAuth;
