import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";


const authenticate = async (req , res, next) =>{
   
    const token =  req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message:"Token not found",
        })
    }
    const data = jwt.verify(token,process.env.JWT_SECRET);

    const user  = await userModel.findById(data.id);

    req.user = user;

    next();
}
export default authenticate;