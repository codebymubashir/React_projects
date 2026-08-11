import React from 'react'
import Dashboard from '../components/Dashboard'

const Homes = () => {
  return (
    <>
      <div className="flex flex-row">
        <Dashboard/>
        <div className="w-full h-85vh bg-[#061b09] p-5">
          <h1 className='text-white font-bold text-6xl frances mt-25 ml-25'>Welcome to home page </h1>
        </div>
      </div>
    </>
  )
}

export default Homes
