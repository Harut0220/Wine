import express, { Router } from "express";
import userController from "../Controller/userController.js";
import UserModel from "../Model/UserModel.js";
import data from "../Data/Data.js";

const userRouter=Router()


/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication managing APIs
 */

/**
 * @swagger
 *  /api/auth/signup:
 *   post:
 *      summary: User Signup
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                password:
 *                  type: string
 *                  format: password
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/signup"
 *
 */


userRouter.post("/signup",userController.signUp)

/**
 * @swagger
 *  /api/auth/signin:
 *   post:
 *      summary: User Signin
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                password:
 *                  type: string
 *                  format: password
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/signin"
 *
 */


userRouter.post("/signin",userController.signIn)

/**
 * @swagger
 *  /api/auth/logout:
 *   post:
 *      summary: User Logout
 *      tags: [Auth]
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/Logout"
 *
 */

userRouter.post("/signout",userController.signOut)
// userRouter.get("/usersseed", async (req, res) => {
//     try {
      
//         await UserModel.deleteMany({})

    
//         const seededUser = await UserModel.insertMany(data.users)
//         console.log(seededUser);
//         res.status(200).send(seededUser)
//     } catch (error) {
//         console.error(error);
//     }
// })

export default userRouter