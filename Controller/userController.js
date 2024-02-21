import UserService from "../Service/UserService.js";

const userController = {
  signUp: async (req, res) => {
    try {
      const { email, password } = req.body;
      const signUpUSer = await UserService.signUp(email, password);
      res.status(201).send(signUpUSer);
    } catch (error) {}
  },
  refresh: async (req, res) => {
    try {
      const { refreshToken } = req.body;

      const token = await UserService.refresh(refreshToken);
      console.log(token);
      res.status(200).send(token);
    } catch (error) {
      console.error(error);
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const signInUser = await UserService.signIn(email, password);
      // console.log(signInUser);
      // res.cookie("token", signInUser.token, {
      //     httpOnly: true,
      //     sameSite: "strict",
      //     // secure: true
      //   });

      res.status(201).send( signInUser );
    } catch (error) {
      console.error("controller error");
    }
  },
  signOut: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      //   const token = req.cookies.token;

      const logoutuser = await UserService.signOut(refreshToken);

      res.status(200).send(logoutuser);

      // const token = req.headers["authorization"].split(" ")[1];
      // console.log(token);
      // if (!token) {
      //   res.status(200).send({ message: "User out" });
      // } else {
      //   res.status(200).send({ message: "User logged" });
      // }
    } catch (error) {
      console.error(error);
    }
  },
};

export default userController;
