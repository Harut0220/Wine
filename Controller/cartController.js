// import { cartProduct } from "../Data/cart.js";
import CartModel from "../Model/CartModel.js";
import ProductModel from "../Model/ProductModel.js";
import cartService from "../Service/CartService.js";

const cartController = {
  getAll: async (req, res) => {
    try {
      const Cart = await cartService.getAll();

      res.status(200).send(Cart);
    } catch (error) {
      console.error("hfhkhg");
    }
  },
  addToCart: async (req, res) => {
    try {
      const { id } = req.params;

      const addedProduct = await cartService.addToCart(id);
      res.status(200).send(addedProduct);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  },
};
export default cartController;
