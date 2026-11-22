const multer = require("multer");

const storageForLocal = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null , "uploads/")
    },
    filename: (req, file, cb) => {
        console.log("in Filename" , file);
        cb( null , Date.now() + file.originalname);
    },
});

// for server 
let storageForServer = multer.memoryStorage();


const upload = multer( {storage : storageForLocal})

module.exports = upload;