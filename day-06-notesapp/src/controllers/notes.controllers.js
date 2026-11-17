const NotesModel = require("../models/notes.models");

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
module.exports = {createNotesController , getAllNotesController}