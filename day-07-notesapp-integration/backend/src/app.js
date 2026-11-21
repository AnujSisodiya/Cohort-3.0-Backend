const express =  require("express");
const cors = require("cors");
const NotesModel = require("./models/notes.models");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route")

const app = express();
connectDB();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}),
);
app.use("/notes", notesRoute)



module.exports = app;