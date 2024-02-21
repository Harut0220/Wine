import { Router } from "express";
import cartController from "../Controller/cartController.js";
import isAuth from "../Middleware/IsAuth.js";

const cartRouter = Router();

/**
 * @swagger
 *  /api/cart/all:
 *   get:
 *      summary: All Cart
 *      tags: [Wines]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *          200:
 *              description: Succes
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/Wine"
 *
 */

cartRouter.get("/all",isAuth, cartController.getAll);

/**
 * @swagger
 *  /api/cart/add/{id}:
 *   post:
 *      summary: Add Product By Id
 *      tags: [Wines]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Add to Cart Wine by Id
 *          required: true
 *          schema:
 *            type: string
 *            format: id
 *      security:
 *        - bearerAuth: []
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/Wine"
 *
 */

cartRouter.post("/add/:id",isAuth,  cartController.addToCart);

/**
 * @swagger
 *  /api/cart/sub/{id}:
 *   post:
 *      summary: Sub Product By Id
 *      tags: [Wines]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Sub Product By Id
 *          required: true
 *          schema:
 *            type: string
 *            format: id
 *      security:
 *        - bearerAuth: []
 *      responses:
 *          200:
 *              description: Success
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref:"#/component/schemas/Wine"
 *
 */

cartRouter.post("/sub/:id",isAuth, cartController.subToCart)

export default cartRouter;
