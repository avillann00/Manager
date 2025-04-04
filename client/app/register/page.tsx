'use client'
import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(username.length < 1 || email.length < 1 || password.length < 1 || confirmPassword.length < 1){
      alert('All fields required')
      return
    }

    if(password !== confirmPassword){
      alert('Password and confirm password are not equal')
      return
    }

    try{
      const response = await axios.post('http://localhost:5000/api/user/register', { username, email, password }, { withCredentials: true })
      console.log('success: ', response.data)
      router.push('/login')
    }
    catch(error){
      console.log('error registering: ', error)
      alert('Error registering')
    }
  }

  return (
    <div className='flex flex-col items-center bg-slate-100 w-screen h-screen gap-8 p-10 rounded-lg'>
      <h1 className='text-4xl'>Welcome to the register page!</h1>
      <div className='flex flex-col justify-center items-center bg-white w-[30%] h-[60%] shadow-md h-auto rounded-lg gap-8'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <input
            type='text'
            value={username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type='password'
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button type='submit' className='border-[2px] border-black rounded-lg hover:bg-slate-400'>Register</button>
        </form>
        <button onClick={() => router.push('/login')} className='p-2 rounded-lg hover:bg-slate-400'>Already have an account?</button>
      </div>
    </div>
  )
}
