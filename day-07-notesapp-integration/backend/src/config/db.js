const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
         await mongoose.connect(process.env.mongodb_uri);
         console.log("MongoDB connected")
    } catch (error) {
        console.log("Error while connecting with db", error);
    }
}

module.exports = connectDB;