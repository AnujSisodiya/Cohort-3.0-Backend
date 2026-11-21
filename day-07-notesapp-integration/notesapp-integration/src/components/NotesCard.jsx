import React from 'react'

const NotesCard = ({ note , deleteNote, noteForUpdate }) => {
  return (
    <div className='w-[30%] border border-black p-4 rounded-xl flex flex-col gap-4'>
        <h1>{note.title}</h1>
        <p className='text-xs'>{note.description. length >20 ? note.description.substring(0,20) : note.description}</p>
        <div className='flex justify-between'>
            <button onClick={ ()=> noteForUpdate(note)} className='p-2 bg-yellow-600 text-black rounded'>Update</button>
            <button onClick={()=>deleteNote(note._id)} className='p-2 bg-red-600 text-black rounded'>Delete</button>
        </div>
    </div>
  )
}

export default NotesCard;