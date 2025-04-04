'use client'

import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(username.length < 1 || password.length < 1){
      alert('Username and password are required')
      return
    }

    try{
      const response = await axios.post('http://localhost:5000/api/user/login', { username, password }, { withCredentials: true })
      router.push('/dashboard')
    }
    catch(error){
      console.log('error logging in: ', error)
      alert('Error logging in')
    }
  }

  return (
    <div className='flex flex-col items-center bg-slate-100 w-screen h-screen gap-8 p-10 rounded-lg'>
      <h1 className='text-4xl'>Welcome to the login page!</h1>
      <div className='flex flex-col justify-center items-center bg-white h-[45%] w-[30%] shadow-md h-auto md:h-[40%] rounded-lg gap-8'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <input
            type='text'
            value={username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type='password'
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit' className='border-[2px] border-black rounded-lg hover:bg-slate-400'>Login</button>
        </form>
        <button onClick={() => router.push('/register')} className='p-2 rounded-lg hover:bg-slate-400'>Need an account?</button>
      </div>
    </div>
  )
}
