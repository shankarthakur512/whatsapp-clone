import  {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config(
    {
        path: './.env'
    }
)



const server = app.listen(process.env.PORT , ()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)
})


