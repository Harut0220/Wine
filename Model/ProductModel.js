import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    brand:{type:String},
    name:{type:String},
    type: { type: String },
    color:{type:String},
    img: { type: String },
    rating:{type:Number},
    stock:{type:Number},
    article:{type:String},
    country:{type:String},
    region:{type:String},
    volume:{type:String},
    alcohol:{type:String},
    price: { type: Number, required: true, default: 0 },
    sales:{type:Number},
    desc:{type:String},
},
    {
        timestamps: true,
    })

 const Product = model("Product", ProductSchema)

export default Product