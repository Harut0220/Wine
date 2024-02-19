import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../Utils/Token.js";
import RefreshToken from "../Model/TokenModel.js";
import jwt from "jsonwebtoken";

const UserService = {
  signUp: async (email, password) => {
    const signUp = await User.findOne({ email });
    if (!signUp) {
      const newUser = new User({
        email: email,
        password: await bcrypt.hash(password, 10),
      });

      newUser.save();
      return { message: "User Singed Up" };
    } else {
      return { message: "User Registered" };
    }
  },
  signIn: async (email, password) => {
    try {
      const signUp = await User.findOne({ email });

      if (!signUp) {
        return { message: "wrong e-mail" };
      }
      if (bcrypt.compareSync(password, signUp.password)) {
        const accessToken = generateAccessToken(signUp);

        const refreshToken = generateRefreshToken(signUp);
        const newToken = new RefreshToken({
          userId: signUp._id,
          token: refreshToken,
        });

        await RefreshToken.deleteMany({});
        newToken.save();

        return {
          accessToken: accessToken,
          refreshToken: refreshToken,
          message: "Logged In",
        };
      } else {
        return { message: "wrong password" };
      }
    } catch (error) {
      console.error("service error");
    }
  },
  refresh: async (refreshToken) => {
    try {
      if (refreshToken) {
        const token = await RefreshToken.findOne({ token: refreshToken });
        if (!token) {
          return { message: "User not logged" };
        }

        jwt.verify(
          refreshToken,
          process.env.ACCESS_TOKEN,
          async (err, { _id, email }) => {
            if (err) console.error(err);

            const deleteToken = await RefreshToken.findByIdAndDelete({
              token: refreshToken,
            });

            const new_access_token = generateAccessToken({ _id, email });

            const new_refresh_token = generateRefreshToken({ _id, email });

            const newToken = await RefreshToken({
              _id,
              token: new_refresh_token,
            }).save();

            return newToken;
          }
        );
      } else {
        return { message: "not logged in" };
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default UserService;
