import express, { Router } from "express";
import productController from "../Controller/productController.js";
import ProductModel from "../Model/ProductModel.js";
import data from "../Data/Data.js";

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
 *      responses:
 *        200:
 *          description: Success
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Wine"
 */

productRouter.get("/", productController.getAll);

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
    await ProductModel.deleteMany({});

    const seededProduct = await ProductModel.insertMany(data.products);

    res.status(200).send(seededProduct);
  } catch (error) {
    console.error(error);
  }
});

export default productRouter;
