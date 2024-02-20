import cartService from "../Service/CartService.js";

const cartController = {
  getAll: async (req, res) => {
    try {
      const Cart = await cartService.getAll();

      res.status(200).send(Cart);
    } catch (error) {
      console.error("CartError");
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
  subToCart:async (req,res)=>{
    try {
      const {id}=req.params 
    
    const addedProduct = await cartService.subToCart(id);
    res.status(200).send(addedProduct);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
    
  }
};
export default cartController;
