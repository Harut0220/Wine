import { Router } from "express";
import cartController from "../Controller/cartController.js";


const cartRouter=Router()



cartRouter.get("/all",cartController.getAll)
cartRouter.post("/:id", cartController.addToCart);

export default cartRouter