import Cart from "../Model/CartModel.js";
import User from "../Model/UserModel.js";

const cartService = {
  getAll: async () => {
    try {
      const CartProducts = await Cart.find()
      return CartProducts;
    } catch (error) {
      console.error("errr");
    }
  },
  addToCart: async (productId, userId) => {
    try {
      const cartExist = await Cart.findOne({ userId: userId })
      console.log(cartExist);

      if (cartExist) {
        cartExist.count = cartExist.count + 1;

        await cartExist.save();
        return cartExist;
      } else {
        let arrayId=[]
        arrayId.push(productId)
        const newCart = new Cart({
          products: [productId],
          userId: userId,
          totalCount: arrayId.length
        });
        await newCart.save();
        return newCart;
      }
    } catch (error) {
      console.error(error);
    }
  },
  subToCart:async (id)=>{
    try {
      const cartExist = await Cart.findOne({ productId: id })

      if (cartExist) {
        cartExist.count = cartExist.count - 1;
        if(cartExist.count===0){
         await Cart.findOneAndDelete({productId:id})
         return {message:"Product deleted"}
        }
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
      console.error("err");
    }
  }
};

export default cartService;
