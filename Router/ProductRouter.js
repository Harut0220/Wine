import express, { Router } from "express";
import productController from "../Controller/productController.js";
import Product from "../Model/ProductModel.js";
import data from "../Data/Data.js";
import isAuth from "../Middleware/IsAuth.js";

const productRouter = Router();


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
 *      summary: Wine
 *      tags: [Wines]
 *      description: Returns a hello message.
 *      parameters:
 *       - in: path
 *         name: Query Filter
 *         type: string
 *         required: true
 *         description: Query
 *      responses:
 *        200:
 *          description: Success
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Wine"
 */

productRouter.get("/product", productController.getAll);

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

export default productRouter;
