import Cart from "../Model/CartModel.js";

const cartService = {
  getAll: async () => {
    try {
      const CartProducts = await Cart.find().populate("productId");
      return CartProducts;
    } catch (error) {
      console.error("errr");
    }
  },
  addToCart: async (id) => {
    try {
      const cartExist = await Cart.findOne({ productId: id }).populate(
        "productId"
      );

      if (cartExist) {
        cartExist.count = cartExist.count + 1;

        await cartExist.save();
        return cartExist;
      } else {
        const newCart = new Cart({
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
