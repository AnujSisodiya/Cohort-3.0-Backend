import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";

const App = () => {

 const {register, handleSubmit} = useForm();

 const submitHandler = async (data)=>{
   
 const formData = new formData();

 formData.append("name", data.name);
 formData.append("email", data.name);
 formData.append("images", data.images[0]);

 await axios.post("http://localhost:5173/users/create",formData);
 
 }
  return (
    <div className='w-[50%] h-screen p-4' >
      <form className='p-4 flex flex-col gap-4 border border-black rounded' onSubmit={handleSubmit(submitHandler)}>
        <input className=' p-2 border border-black rounded'{...register("name")} type="text" placeholder='Name' />
        <input className=' p-2 border border-black rounded'{...register("email")} type="text" placeholder='Email' />
        <input className=' p-2 border border-black rounded'{...register("images")} multiple type="file" placeholder='Profile-Pic' />
        <input className='bg-blue-600 rounded w-[50%] p-2' type="submit" />
      </form>
    </div>
  )
}

export default App