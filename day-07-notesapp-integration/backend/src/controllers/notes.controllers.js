const NotesModel = require("../models/notes.models");
//Create
const createNotesController = async (req , res ) =>{
    try {
        let { title , description} =  req.body;

        let newNote = await NotesModel.create({
            title, description,
        });
        return res.status(201).json({
            message: "Note Created Successfully",
            data: newNote,
        });

    } catch (error) {
        console.log("Error in Creation",error);
    }
}
//Read
const getAllNotesController =  async (req , res)=>{
    try {
        const allNotes = await NotesModel.find();
        res.status(200).json({
            message:"All notes fetched!",
            data: allNotes
        })
         
    } catch (error) {
        console.log("Error while fetching notes", error)
    }
}
//Read One
const getNoteByIdController =  async (req , res)=>{
   try {
    let noteId = req.params.id;
    
   let note = await NotesModel.findById(noteId);
   res.status(200).json({
    message:"Note fetched Successfully",
    data:note
   })

   } catch (error) {
    console.log("Error in fetching the note", error)
   }
}
//Update Vai Put
const updateNoteByIdController=  async (req,res)=>{
    try {
        let noteId = req.params.id;
        let body = req.body;
        
        let updatedNote = await NotesModel.findByIdAndUpdate(noteId , body , {new:true});

        return res.status(200).json({
            message:"Note Updated Succesfully",
            data:updatedNote,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

const singleEntityUpdateController = async(req,res) =>{
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedPatch = await NotesModel.findByIdAndUpdate(noteId, body);

    return res.status(200).json({
        message: "Patched the note",
        data:updatedPatch,
    })
  } catch (error) {
    return res.status(500).json(
        {
            message:"Internal Server Error",
        }
    )
  }
}
//Delete one by Id
const deleteNoteByIdController = async (req,res) =>{
    try {
        let noteId = req.params.id;
        
        await NotesModel.findByIdAndDelete(noteId);

        return res.status(200).json({
            message:"Note Deleted Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
module.exports = {createNotesController , getAllNotesController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController,singleEntityUpdateController}