// let http = require("http");

// let server = http.createServer((req, res)=>{
//    console.log("Server is runnig");
//    res.end("Server has listend the request")

    //    if(req.url == "/home" ){
    //     res.end("This is Home Page")
    //    }
       
    //    if(req.url == "/users" ){
    //     res.end("This is User Page")
    //    }
       
    //    if(req.url == "/Cart" ){
    //     res.end("This is Cart Page")
    //    }
// });

// server.listen(3000, ()=>{
//     console.log("Server is listening on the Port 3000")
// })


let express = require("express")

let app = express()

app.get("/", (req,res)=>{
    res.send("This is Home Page")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})