const express = require("express");
const fileRoute = require("./routes/file.routes");
const upload = require("./config/multer");
const app = express();

app.use(express.json());


app.get("/",  (req,res)=>{
    res.send("Backend running sucessfully");
})

app.use("/file",fileRoute)

module.exports = app;