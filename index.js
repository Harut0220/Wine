import express  from "express";
import { config } from "dotenv";
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url";
import productRouter from "./Router/ProductRouter.js";
import connection from "./Utils/Connection.js";
import cartRouter from "./Router/CartRouter.js";
import userRouter from "./Router/UserRouter.js";
import swaggerUI from "swagger-ui-express"
import { specs } from "./Utils/Swagger.js";


const app=express()
const dotenv=config()
const conn=connection()
app.use(express.json())
app.use(cors())
app.use("/api/swagger",swaggerUI.serve,swaggerUI.setup(specs,{explorer: true}))

app.set("views engine","ejs");

const _dirname=path.dirname(fileURLToPath(import.meta.url))
// app.set("views", path.join(__dirname, "Views"));
// app.use(express.static(path.join(__dirname, "Public")));

app.use("/api",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/auth",userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`DB Connected`);
})