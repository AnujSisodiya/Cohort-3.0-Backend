let express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/create", (req,res)=>{
    let body = req.body;
    console.log(body);

    users.push(body);
});

app.get("/", (req,res)=>{
    res.send(users);
});



let port = 3000;

app.listen(port , (req,res)=>{
    console.log(`Server is running on ${port}`)
})