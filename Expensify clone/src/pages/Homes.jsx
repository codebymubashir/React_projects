import React from 'react'
import Dashboard from '../components/Dashboard'

const Homes = ({dark}) => {
  return (
    <>
      <div className="flex flex-row">
        <Dashboard dark={dark}/>
        <div className={`w-full h-85vh p-5 ${dark ? 'bg-[#061b09]' : 'bg-white'}`}>
          <h1 className={`font-bold text-6xl frances mt-25 ml-25 ${dark ? 'text-white' : 'text-[#0B2E1F]'}`}>
            Welcome to home page
          </h1>
        </div>
      </div>
    </>
  )
}

export default Homes