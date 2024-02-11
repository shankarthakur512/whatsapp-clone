import express from "express"
import cors from "cors"



const app = express()
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json());



//routes
import userRouter from "./routes/AuthRoutes.js"



//routes declaration
app.use("/api/v1/user", userRouter)





export {app}