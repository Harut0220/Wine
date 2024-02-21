import { Schema, model } from "mongoose";

const CartItemSchema = new Schema(
  {
    productId:{type: Schema.Types.ObjectId,ref:"ProductModel"},
    count:{type: Number,default: 0},
    cartId:{type:Schema.Types.ObjectId,ref:"Cart"}
  },
  {
    timestamps: true,
  }
);

const CartItem = model("CartItem", CartItemSchema);

export default CartItem;