let express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/create", (req,res)=>{
    let body = req.body;
    users.push(body);
    console.log("User Saved SuccessFULLY");

});

app.delete("/delete/:id" ,(req,res)=>{
    let { id} = req.params;
    let userData = users.filter((val)=> val.id !== id)
    users = userData;
    res.send("USER Deleted Successfully!!");
})

app.patch("/update/:id", (req,res)=> {
    let {id} = req.params;
    let {name} = req.body;

    let updatedUser = users.map((val)=>
        val.id === id ? {...val , name} : val
    );
    res.send(updatedUser);
});

app.get("/", (req,res)=>{
    res.send(users);
});



let port = 3000;

app.listen(port , (req,res)=>{
    console.log(`Server is running on ${port}`)
})