import React from 'react'
import Dashboard from '../components/Dashboard'

const Homes = () => {
  return (
    <div className='flex flex-row'>
      <Dashboard/>
      <div className='w-full h-screen bg-[#061b09] text-center justify-center pt-48'>
        <h1 className='frances text-white text-7xl'>Home</h1>
        <h1 className='frances text-white text-7xl'>Welcome to Home page</h1>
      </div>
    </div>
  )
}

export default Homes