const express =  require("express");
const NotesModel = require("./models/notes.models");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route")

const app = express();
connectDB();
app.use(express.json())

app.use("/notes", notesRoute)



module.exports = app;