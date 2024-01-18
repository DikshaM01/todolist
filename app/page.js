"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);
 
  const submitHandler = (e) => {
    e.preventDefault();
   const currentDate=new Date();
   const formatteddate=currentDate.toLocaleDateString();
   const formattedtime=currentDate.toLocaleTimeString();
    setMaintask([...maintask, { title, desc,date:formatteddate,time:formattedtime,completed:false }]);
    setTitle("");
    setDesc("");
    console.log(maintask)
  };
  const completion=(i)=>{
    const updatetask=[...maintask];
    updatetask[i].completed=!updatetask[i].completed;
    setMaintask(updatetask);
  }
const deletehandler=(i)=>{
  let copytask=[...maintask]
  copytask.splice(i,1)
  setMaintask(copytask)
}
  let renderTask = <h2>No task Available</h2>;
 if(maintask.length>0){
  renderTask=maintask.map((t,i)=>{
    return (
    
      <li key={i} className='flex items-center justify-between'>
    <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
      <h6 className='text-lg'>{t.date}</h6>
      <h6 className='text-lg'>{t.time}</h6>
    </div>
    <button 
    onClick={()=>{
      deletehandler(i)
    }}
     className='bg-red-400 text-white px-4 py-2 rounded font-bold mb-5'>Delete</button>
    <button 
    onClick={()=>{
      completion(i)
    }}
     className='bg-red-400 text-white px-4 py-2 rounded font-bold mb-5'>
      {t.completed?'unmark as completed':'mark as completed'}
     </button>
    </li>
    );
     });
 }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-10xl font-bold text-center'>Todo List</h1>
      <form onSubmit={submitHandler} className='task-inputs'>
        <input
          type="text"
          className='text-black border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Task here'
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Fix here
        />

        <input
          type="text"
          className='text-black border-zinc-800 border-4 m-8 px-10 py-6'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)} // Fix here
        />

        <button className='bg-black text-white px-4 py-2 text-2xl font-bold m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200' task-container>
        <ul>
         {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;
