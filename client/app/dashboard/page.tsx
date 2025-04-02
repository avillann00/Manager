'use client'

import React, { useEffect, useState } from 'react'

export default function Dashboard(){
  const [username, setUsername] = useState('')
  const [tasks, setTasks] = useState([])
  const [notes, setNotes] = useState([])

  const mappedTasks = tasks?.map((task) => (
    <li key={task._id}>
      <p>test</p>
    </li>
  ))
 
  const mappedNotes = notes?.map((note) => (
    <li key={note._id}>
      <p>test</p>
    </li>
  )) 

  useEffect(() => {
    setUsername('John')
  }, [])

  return (
    <>
      <h1 className='flex justify-center text-4xl'>Hello {username}, welcome to your dashboard!</h1>
      <h3 className='flex justify-center text-2xl'>Tasks: </h3> 
      <button className='flex justify-center bg-slate-200 rounded-lg py-2 px-2 hover:bg-slate-500'>View all tasks</button>
      <button className='flex justify-center bg-slate-200 rounded-lg py-2 px-2 hover:bg-slate-500'>Add task</button>
      <ul>
        {mappedTasks}
      </ul>
      <h3 className='flex justify-center text-2xl'>Notes: </h3>
      <button className='flex justify-center bg-slate-200 rounded-lg py-2 px-2 hover:bg-slate-500'>View all notes</button>
      <button className='flex justify-center bg-slate-200 rounded-lg py-2 px-2 hover:bg-slate-500'>Add note</button>
      <ul>
        {mappedNotes}
      </ul>
    </>
  )
}
