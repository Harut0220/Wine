import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  //   const token = req.cookies.token;
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.send("Token not found");
  }
  const decode = jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.send({ message: err });
    else {
      req.user = user;

      next();
    }
  });
};

export default isAuth;
