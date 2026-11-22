const create =  (req, res)=>{
    console.log("User created Successfully");
    console.log(req.body);
    console.log(req.files);
    
}

module.exports = {create}