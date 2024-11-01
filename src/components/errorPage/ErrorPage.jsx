import React from 'react'

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div>
             <h1 className="text-4xl font-bold">404 Page Not Found</h1>
             <p className="text-3xl">You Provide An Invalid Route</p>
        </div>
    </div>
  )
}

export default ErrorPage