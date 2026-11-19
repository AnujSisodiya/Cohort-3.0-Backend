const express = require("express");
const {createNotesController ,singleEntityUpdateController, getAllNotesController,getNoteByIdController,updateNoteByIdController,deleteNoteByIdController}= require("../controllers/notes.controllers");
const NotesModel = require("../models/notes.models");

const router = express.Router();

router.post("/create", createNotesController)
router.get("/allNotes",getAllNotesController)
router.get("/:id",getNoteByIdController)
router.patch("/:id/single",singleEntityUpdateController)
router.put("/:id",updateNoteByIdController)
router.delete("/:id",deleteNoteByIdController )

module.exports = router;