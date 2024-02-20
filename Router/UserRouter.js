import express, { Router } from "express";
import userController from "../Controller/userController.js";
import isAuth from "../Middleware/IsAuth.js";

const userRouter = Router();

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
 *                          $ref:"#/component/schemas/Signup"
 *
 */

userRouter.post("/signup", userController.signUp);

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
 *                          $ref:"#/component/schemas/Signin"
 *
 */

userRouter.post("/signin", userController.signIn);

/**
 * @swagger
 *  /api/auth/refresh:
 *   post:
 *      summary: User Refresh
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  refreshToken:
 *                      type: string
 *                      format: token
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/refreshToken"
 *
 */

userRouter.post("/refresh",isAuth, userController.refresh);

/**
 * @swagger
 *  /api/auth/signout:
 *   post:
 *      summary: User Logout
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                refreshToken:
 *                  type: string
 *                  format: token
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/Logout"
 *
 */

userRouter.post("/signout",isAuth, userController.signOut);

export default userRouter;
