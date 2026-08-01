import React from 'react'
import Dashboard from '../components/Dashboard'
import { FaReceipt } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";



const Spend = () => {
  return (
    <>
      <div className='flex flex-row'>
      <Dashboard/>
      <div className='w-full h-screen  bg-[#061b09]'>
        <div className='w-90 h-screen border-2 border-[#1a3d32]'>
            <h1 className='frances text-white text-4xl p-4'>Spend</h1>
            <div className='spends w-full h-10 p-2 pl-4'>
                <p className=' text-[#9da99e]'>Expense Reports</p> 
            </div>
            <div className='spends w-85 h-12 flex flex-row gap-2 p-3 pl-4 ml-2 rounded-lg'>
                <FaReceipt className='text-[#8b9c8f] icons w-5 h-5 mt-1'/>
                <p className=' text-white font-bold'>Expense </p> 
            </div>
            <div className='spends w-85 h-12 flex flex-row gap-2 p-3 pl-4 ml-2 rounded-lg'>
                <TbReportSearch className='text-[#8b9c8f] icons w-5 h-5 mt-1'/>
                <p className=' text-white'> Reports</p> 
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Spend
