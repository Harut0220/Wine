import mongoose, { connect } from "mongoose"

const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        return true
    } catch (error) {
        console.error(error)
        console.log("mongo not connected");
        return false
    }
}

export default connection