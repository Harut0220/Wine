import { Schema, model } from "mongoose";

const CartSchema = new Schema(
    {
        productId: { type: Schema.Types.ObjectId,ref:"ProductModel"},
        count: { type: Number, default: 1 },
    },
    {
        timestamps: true,
    }
)

const Cart = model("Cart", CartSchema)

export default Cart