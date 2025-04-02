'use client'

import React, { useState, useEffect } from 'react'

export default function LoadingScreen({ children }: { children: React.ReactNode }){
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="relative">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex flex-col items-center">
            <div className="loader border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg">Loading...</p>
          </div>
        </div>
      ) : (
        <div>{children}</div>  
      )}
    </div>  )
}
