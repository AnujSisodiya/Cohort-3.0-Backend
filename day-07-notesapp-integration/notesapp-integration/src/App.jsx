import React, { useState } from 'react'

const App = () => { 
   const [formVlaues, setFormVlaues] = useState({
    title:"",
    description:""
   })

   const handleChnage = (e) =>{
    setFormVlaues((prev) =>({...prev, [e.target.name]: e.target.value}));
   }
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formVlaues);

    setFormVlaues({
      title: "",
      description: ""
    })
   }
  return (
    <div className='p-4 h-screen flex flex-col gap-4'>
      <h1 className='text-3xl font-semibold'>NotesApp</h1>
      
      <form onSubmit={handleSubmit} className='w-70 border border-black p-4 rounded-xl flex flex-col'>
        <input  onChange={handleChnage}
         name="title" 
         values = {formVlaues.title} className='p-2 outline-none text-xl rounded border-black' type="text" placeholder='Title' />
        <input onChange={handleChnage} 
         name="description"
         values = {formVlaues.description} className='p-2 outline-none text-xl rounded border-black' type="text" placeholder='Description'/>
        <button className='bg-blue-600 text-black p-2 rounded'>Add Note</button>
      </form>
      </div>

      
  )
}

export default App    