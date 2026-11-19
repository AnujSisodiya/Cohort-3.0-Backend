const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description:{
    type: String,
        required:true,
    minLength:[20, "Minimum 20 Characters are required"]    
    },
    
});

const NotesModel = mongoose.model("notes",noteSchema);

module.exports = NotesModel;