import express, { Router } from "express";
import productController from "../Controller/productController.js";
import Product from "../Model/ProductModel.js";
import data from "../Data/Data.js";
import isAuth from "../Middleware/IsAuth.js";

const productRouter = Router();

/**
 * @swagger
 *  /api/product/seed:
 *    get:
 *      summary: Wines Seed
 *      tags: [Wines]
 *      responses:
 *        200:
 *          description: Success
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Wine"
 */

productRouter.get("/seed", async (req, res) => {
  try {
    await Product.deleteMany({});

    const seededProduct = await Product.insertMany(data.products);

    res.status(200).send(seededProduct);
  } catch (error) {
    console.error(error);
  }
});


/**
 * @swagger
 * tags:
 *  name: Wines
 *  description: Wines managing APIs
 */

/**
 * @swagger
 *  /api/product:
 *    get:
 *      summary: filtered Wines
 *      tags: [Wines]
 *      parameters:
 *        - in: query
 *          name: brand
 *          type: array
 *          collectionFormat: csv
 *          items:
 *            type: object
 *        - in: query
 *          name: type
 *          type: array
 *          collectionFormat: csv
 *          items:
 *            type: object
 *        - in: query
 *          name: pricemin
 *          type: number
 *          collectionFormat: csv
 *          items:
 *            type: object
 *        - in: query
 *          name: pricemax
 *          type: number
 *          collectionFormat: csv
 *          items:
 *            type: object
 *        - in: query
 *          name: rating
 *          type: array
 *          collectionFormat: csv
 *          items:
 *            type: object
 *      responses:
 *        200:
 *          description: Success
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Wine"
 */

productRouter.get("/",isAuth, productController.getAll);

/**
 * @swagger
 *  /api/product/{id}:
 *   get:
 *      summary: Return Wine By Id
 *      tags: [Wines]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Return Wine By Id
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

productRouter.get("/:id",isAuth,productController.getById)



export default productRouter;
