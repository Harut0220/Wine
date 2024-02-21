import CartItem from "../Model/CartItemModel.js";
import Cart from "../Model/CartModel.js";
import Product from "../Model/ProductModel.js";
import User from "../Model/UserModel.js";

const cartService = {
  getAll: async () => {
    try {
      const CartProducts = await Cart.find();
      return CartProducts;
    } catch (error) {
      console.error("errr");
    }
  },
  addToCart: async (productId, userId) => {
    try {
      const cartExist = await Cart.findOne({ userId: userId });

      let arrayProductId = [];
      //ete userov cart chka
      if (!cartExist) {
        const data = await Product.find({ _id: productId });
        //lriv taza sarquma ete aydpisi product goyutyun uni
        if (data) {
          const searchCartItem = await CartItem.findOne({ productId });
          arrayProductId.push(productId);
          //lriv taza sarquma ete cartitemum chka
          if (!searchCartItem) {
            const newCart = new Cart({
              userId: userId,
              products: arrayProductId,
              totalCount: 1,
            });
            await newCart.save();

            const cartByUser = new CartItem({
              productId: productId,
              count: 1,
              cartId: newCart._id,
            });
            await cartByUser.save();
            
          }
          return {message:"Product added successfully"}
        }else{
          return {message:"Product not found"}
        }
      } else {
        const idsArray = cartExist.products.find((ids) => {
          return ids === productId;
        });
        //ete et idov apranq arden ka
        if (idsArray) {
          const searchItemCart = await CartItem.findOne({
            productId: productId,
          });
          const searchCart = await Cart.findOne({ userId: userId });

          searchItemCart.count = searchItemCart.count + 1;
          await searchItemCart.save();

          
          searchCart.totalCount = searchCart.totalCount+1;
          await searchCart.save();

          return {message:"Product added successfully"}
        } else {
          const searchItem = await CartItem.findOne({ productId });
          const searchCart = await Cart.findOne({ userId });
          //ete nor product@ chka
          if (!searchItem) {
            searchCart.products.push(productId);
            searchCart.totalCount = searchCart.totalCount+1;
            await searchCart.save();

            const newIdCartItem = new CartItem({
              productId,
              count: 1,
              cartId: searchCart._id,
            });
            await newIdCartItem.save();
          }
          return {message:"Product added successfully"}
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
  subToCart: async (productId, userId) => {
    try {
      const userCart=await Cart.findOne({userId})

      if(userCart){
        const userCart=await Cart.findOne({userId})
        const cartItem = await CartItem.findOne({productId})
        if(cartItem){
           if(cartItem.count<=1){
            const indexRemov=userCart.products.indexOf(productId)
            userCart.products.splice(indexRemov,1)
            await userCart.save()
            const deleteItem=await CartItem.findOneAndDelete({productId})
            
          }
          if(userCart.totalCount<=1){
           const deleteUserCart=await Cart.findOneAndDelete({userId})
            
          }
          userCart.totalCount=userCart.totalCount-1
          await userCart.save()
          cartItem.count=cartItem.count-1
          await cartItem.save()
         
        }
      }
      
    } catch (error) {
      console.error("err");
    }
  },
};

export default cartService;
