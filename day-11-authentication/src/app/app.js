import express from "express";
import jwt from "jsonwebtoken"
import userModel from "../model/user.model.js";

const app = express();
app.use(express.json());

app.get("/api", (req, res)=>{
    res.status(200).json({
        message:"Welcome to the Authentication API"
    });
})
app.post("/api/auth/register", async (req,res)=>{

    const {email , name, password} = req.body;
    
    const user = await userModel.create({
            email, name, password
    })
     
    const token = jwt.sign({
        id:user._id
    },
   "994ddd01e69b84d216266bf62f48c2213928532417ca73386b43a671e7e586b5");

   res.status(201).json({
    message: "User Created successfully!!!",
    data: {
        user:{
        email,name, 
        id: user._id
    }, token
    } 
   })
})

export default app;