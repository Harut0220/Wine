import express, { Router } from "express";
import userController from "../Controller/userController.js";


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
 *                          $ref:"#/component/schemas/Signup"
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
 *                          $ref:"#/component/schemas/Signin"
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


export default userRouter