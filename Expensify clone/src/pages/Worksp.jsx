import React from 'react'
import Dashboard from '../components/Dashboard'
import Image from '../assets/reports.png'

const Worksp = () => {
  return (
   <div className='flex flex-row'>
      <Dashboard/>
      <div className='w-full h-screen bg-[#061b09]'>
        <div>
          <h2 className=' frances text-white text-3xl p-4'>Workspace</h2>
          <div className='flex flex-row gap-3 p-4'>
            <button className="text-white font-bold p-3 rounded-4xl bg-[#1a3d32]">Workspace</button>
            <button className="text-white font-bold p-3 rounded-4xl bg-[#03d47c]">Domain</button>
          </div>
        </div>
        <div className="flex flex-col gap-3  w-[50%] mt-20 ml-90 text-center  h-auto p-10">
                    <img className="w-110 h-70 border ml-47" src={Image} alt="" />
                    <h2 className="text-white text-3xl text-center font-bold frances">No workspaces yet</h2>
                    <p className="text-[#a7b4a8] text-center text-base">Create a workspace to manage your expenses, reimbursements, and company cards.</p>
                    <div className="flex flex-row gap-3  justify-center">
                        <button className="text-white font-bold p-3 rounded-4xl bg-[#1a3d32]">Taka a test drive</button>
                        <button className="text-white font-bold p-3 rounded-4xl bg-[#03d47c] ">Create expenses</button>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Worksp
