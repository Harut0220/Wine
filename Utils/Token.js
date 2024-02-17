import jwt from "jsonwebtoken"

const generateToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        password:user.password
    }

    try {
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "5m"
        })

        return token
    } catch (error) {
        throw new Error("Token generate error", error.message)       
    }
}

export default generateToken