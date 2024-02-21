import { Schema, model } from "mongoose";

const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "ProductModel" }],
    totalCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Cart = model("Cart", CartSchema);

export default Cart;
