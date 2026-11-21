import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotesCard from './components/NotesCard';

const App = () => {
  const [formVlaues, setFormVlaues] = useState({
    title: '',
    description: '',
  });
  const [allNotes, setAllNotes] = useState([])
  const [updateNoteId, setupdateNoteId] = useState(null)
  const handleChnage = (e) => {
    setFormVlaues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 

  let getAllNotes = async (e) => {
      try {
        let res = await axios.get('http://localhost:3000/notes/allNotes');
        console.log(res);
        setAllNotes(res.data.data);
      } catch (error) {
        console.log('Error in getting all the notes api', error);
      }
    };
  useEffect(()=> {
    getAllNotes(); 
  },[])


 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formVlaues);

  if(updateNoteId) {
    let res = await axios.put(`http:localhost:3000/notes/${updateNoteId}`,formVlaues);
  }  
  else{
    
    //Api Call
    let res = await axios.post(
      'http://localhost:3000/notes/create',
      formVlaues
    );
  }
    setFormVlaues({
      title: '',
      description: '',
    });
   getAllNotes(); 
  };
  let deleteNote = async (id) => {
  try {
    let res = await axios.delete(`http://localhost:3000/notes/${id}`);
    console.log(res);
       getAllNotes();
  } catch (error) {
    console.log("Error in delete Note Api", error);
  }
  }


  let noteForUpdate = (note) =>{
    console.log(note);
    setupdateNoteId(note._id);
    setFormVlaues({
      title: note.title,
      description: note.description
    })
  }
  return (
    <div className="p-4 h-screen flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">NotesApp</h1>

      <form
        onSubmit={handleSubmit}
        className="w-70 border border-black p-4 rounded-xl flex flex-col"
      >
        <input
          onChange={handleChnage}
          name="title"
          value={formVlaues.title}
          className="p-2 outline-none text-xl rounded border-black"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleChnage}
          name="description"
          minLength={20}
          required
          value={formVlaues.description}
          className="p-2 outline-none text-xl rounded border-black"
          type="text"
          placeholder="Description"
        />
        <button className="bg-blue-600 text-black p-2 rounded">{}updateNoteId ? "Update Note :"Add Note</button>
      </form>

      <div className='flex gap-4'>
        {allNotes.map((val)=> (
          <NotesCard key={val._id} note={val} noteForUpdate={noteForUpdate} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
