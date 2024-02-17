import CartModel from "../Model/CartModel.js";
import ProductModel from "../Model/ProductModel.js";

const cartService = {
  getAll: async () => {
    try {
      const CartProducts = await CartModel.find().populate("productId");
      return CartProducts;
    } catch (error) {
      console.error("errr");
    }
  },
  addToCart: async (id) => {
    try {
      const cartExist = await CartModel.findOne({ productId: id }).populate(
        "productId"
      );

      if (cartExist) {
        cartExist.count = cartExist.count + 1;

        await cartExist.save();
        return cartExist;
      } else {
        const newCart = new CartModel({
          productId: id,
        });
        await newCart.save();
        return newCart;
      }
    } catch (error) {
      console.log("err");
    }
  },
};

export default cartService;
