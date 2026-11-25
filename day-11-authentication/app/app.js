import express from "express";
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json());

app.get("/api", (req, res)=>{
    res.status(200).json({
        message:"Welcome to the Authentication API"
    });
})
app.post("/api/auth/register",(req,res)=>{

    const {email , name, password} = req.body;
    
    //Save Data to the DB//
     
    const token = jwt.sign({
        email, name
    },
   "994ddd01e69b84d216266bf62f48c2213928532417ca73386b43a671e7e586b5");

   res.status(201).json({
    message: "User Created successfully!!!",
    data: {
        user:{
        email,name
    }, token
    } 
   })
})

export default app;