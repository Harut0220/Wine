import { Schema, model } from "mongoose";

const UsersSchema = new Schema(
    {
     name:{type:String},
     email:{type:String},
     isAdmin:{type:Boolean},
     password:{type:String},
     addrress:{type:Object,
        fullName:{type:String},
        addrress:{type:String},
        postalCode:{type:Number},
        country:{type:String},
        city:{type:String}
     }
    },
    {
        timestamps: true,
    }
)

const UserModel = model("UserModel", UsersSchema)

export default UserModel