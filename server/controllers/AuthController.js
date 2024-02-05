import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser =asyncHandler (async (req , res,next) =>{
   const {email} = req.body
    if(!email){
        throw new ApiError(400 , "Email is not found")
}
const prisma = getPrismaInstance();

const user = await prisma.User.findUnique({where : {email}});
if(!user){
    return res.json(new ApiResponse(400 , null , "user not found", ))
}else{
    return res.status(200)
    .json(new ApiResponse(200 , user , "User found successfully"))
}

})