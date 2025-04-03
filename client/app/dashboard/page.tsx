'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Document{
  // _id: string
  title: string
  details: string
}

export default function Dashboard(){
  const [username, setUsername] = useState('')
  const [tasks, setTasks] = useState<Document[]>([])
  const [notes, setNotes] = useState<Document[]>([])

  const mappedTasks = tasks?.map((task) => (
    <li 
      key={task.title} 
      className='border-2 border-slate-400 rounded-lg bg-white p-4 shadow-md flex flex-col items-center w-[250px]'
    >
      <h4 
        className='font-semibold text-lg hover:bg-slate-100 rounded-lg'
        onClick={handleTask}
      >
        {(task.title.length > 1) ? `${task.title.slice(0, 10)}...` : `${task.title}`}
      </h4>
      <p className='text-gray-600'>{task.details.slice(0, 10)}</p>
      <div className='flex gap-4'>
        <button className='bg-yellow px-2 py-4 hover:bg-yellow-500 rounded-md'>Modify task</button>
        <button className='bg-red px-2 py-4 hover:bg-red-500 rounded-md'>Delete task</button>
      </div>
    </li>
  ))

  const mappedNotes = notes?.map((note) => (
    <li 
      key={note.title} 
      className='border-2 border-slate-400 rounded-lg bg-white p-4 shadow-md flex flex-col items-center w-[250px]'
    >
      <h4 
        className='font-semibold text-lg hover:bg-slate-100 rounded-lg'
        onClick={handleNote}
      >
        {(note.title.length > 1) ? `${note.title.slice(0, 10)}...` : `${note.title}`}
      </h4>
      <p className='text-gray-600'>{note.details.slice(0, 10)}</p>
      <div className='flex gap-4'>
        <button className='bg-yellow px-2 py-4 hover:bg-yellow-500 rounded-md'>Modify note</button>
        <button className='bg-red px-2 py-4 hover:bg-red-500 rounded-md'>Delete note</button>
      </div>
    </li>
  ))

  const handleProfile = () => {

  }

  const handleTasks = () => {

  }

  const handleAddTask = () => {

  }

  const handleNotes = () => {

  }

  const handleAddNote = () => {

  }

  const handleTask = () => {

  }

  const handleNote = () => {

  }

  return (
    <div className=' bg-slate-100 h-full w-full flex flex-col items-center gap-8 p-10'>
      <div className='flex justify-between items-center w-full px-10 py-15'>
        <h1 className='text-4xl underline flex-1 text-center'>Hello {username}, welcome to your dashboard!</h1>

        <img
          onClick={handleProfile}
          alt='User Photo'
          className='w-24 h-24 rounded-full object-cover border border-black'
        />
      </div>

      <div className='flex flex-col items-center gap-4 border-[5px] border-black rounded-lg w-[400px] min-h-[400px]'>
        <h3 className='text-2xl'>Tasks</h3>
        <div className='flex gap-4'>
          <button className='bg-slate-200 rounded-lg py-2 px-4 hover:bg-slate-500' onClick={handleTasks}>View all tasks</button>
          <button className='bg-slate-200 rounded-lg py-2 px-4 hover:bg-slate-500' onClick={handleAddTask}>Add task</button>
        </div>
        <ul className='border border-black rounded-lg bg-blue-100 p-4 w-[300px]'>
          {mappedTasks}
        </ul>
      </div>

      <div className='flex flex-col items-center gap-4 border-[5px] border-black rounded-lg w-[400px] min-h-[400px]'>
        <h3 className='text-2xl'>Notes</h3>
        <div className='flex gap-4'>
          <button className='bg-slate-200 rounded-lg py-2 px-4 hover:bg-slate-500' onClick={handleNotes}>View all notes</button>
          <button className='bg-slate-200 rounded-lg py-2 px-4 hover:bg-slate-500' onClick={handleAddNote}>Add note</button>
        </div>
        <ul className='border border-black rounded-lg bg-blue-100 p-4 w-[300px]'>
          {mappedNotes}
        </ul>
      </div>
    </div>
  )
}
