import UserService from "../Service/UserService.js";

const userController = {
    signUp:async (req,res)=>{
        try {

            const {email,password}=req.body
            const signUpUSer=await UserService.signUp(email,password)
            res.status(201).send(signUpUSer) 
        } catch (error) {
            
        }
        
        
    },
    signIn:async (req,res)=>{
        try {
            const {email,password}=req.body
            
            const signInUser=await UserService.signIn(email,password)
            
            res.cookie("token", signInUser.token, {
                httpOnly: true,
                sameSite: "strict",
                // secure: true
              });
              
            res.status(201).send({message: signInUser.message}) 
        } catch (error) {
            
        }
        
    },
    signOut:async (req,res)=>{
        try {
            const token = req.headers["authorization"].split(" ")[1];
            console.log(token);
            if(!token){
                res.status(200).send({message:"User out"})
            }else{
                res.status(200).send({message:"User logged"})
            }
            
        } catch (error) {
            
        }
    }
};

export default userController;