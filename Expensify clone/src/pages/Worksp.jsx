import React from 'react'
import Dashboard from '../components/Dashboard'
import Image from '../assets/reports.png'

const Worksp = ({ dark }) => {
  return (
   <div className='flex flex-row'>
      <Dashboard dark={dark}/>
      <div className={`w-full h-screen ${dark ? 'bg-[#061b09]' : 'bg-white'}`}>
        <div>
          <h2 className={`frances text-3xl p-4 ${dark ? 'text-white' : 'text-[#0B2E1F]'}`}>Workspace</h2>
          <div className='flex flex-row gap-3 p-4'>
            <button className="text-white font-bold p-3 rounded-4xl bg-[#1a3d32]">Workspace</button>
            <button className="text-white font-bold p-3 rounded-4xl bg-[#03d47c]">Domain</button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[50%] ml-90 text-center h-auto p-10">
                    <img className="w-80 h-50 ml-17" src={Image} alt="" />
                    <h2 className={`text-3xl text-center font-bold frances ${dark ? 'text-white' : 'text-[#0B2E1F]'}`}>No workspaces yet</h2>
                    <p className={`text-center text-base ${dark ? 'text-[#a7b4a8]' : 'text-gray-500'}`}>Create a workspace to manage your expenses, reimbursements, and company cards.</p>
                    <div className="flex flex-row gap-3 justify-center">
                        <button className="text-white font-bold p-3 rounded-4xl bg-[#1a3d32]">Taka a test drive</button>
                        <button className="text-white font-bold p-3 rounded-4xl bg-[#03d47c]">Create expenses</button>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Worksp