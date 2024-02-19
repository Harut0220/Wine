import { Router } from "express";
import cartController from "../Controller/cartController.js";
import isAuth from "../Middleware/IsAuth.js";


const cartRouter=Router()



cartRouter.get("/all",isAuth,cartController.getAll)

/**
 * @swagger
 *  /api/cart/all:
 *   get:
 *      summary: Return Boxes by Parent Categories Id
 *      tags: [Wines]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: by Parent Categories Id
 *          required: true
 *          schema:
 *            type: string
 *            format: id
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
cartRouter.post("/:id",isAuth, cartController.addToCart);

export default cartRouter