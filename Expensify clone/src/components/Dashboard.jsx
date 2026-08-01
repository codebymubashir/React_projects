import React from 'react'
import { IoMdHome } from "react-icons/io"
import { MdInbox } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuScanText } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-row'>
      <div className='w-20 h-screen bg-[#061b09] border flex flex-col justify-between'>
        <div className='flex flex-col text-4xl gap-4'>
         <Link to={"/homes"}> <IoMdHome  className='text-[#8b9c8f] icons border-2 w-20 h-15 p-3'/></Link>
       <Link to={"/Inbox"}><MdInbox  className='text-[#8b9c8f] icons  border-2 w-20 h-15 p-3'/></Link>
        <Link to={"/Spend"} ><FaReceipt  className='text-[#8b9c8f] icons border-2 w-20 h-15 p-3'/></Link>
        <Link to={"/Worksp"}><HiBuildingOffice2  className='text-[#8b9c8f] icons  border-2 w-20 h-15 p-3'/></Link>
        </div>
        <div className=' flex flex-col gap-4 mb-14'>
          <LuScanText className='text-[#8b9c8f] icons text-4xl  border-2 w-20 h-15 p-3'/>
          <button className=' text-4xl text-[#8b9c8f] icons  border-2 w-20 h-15 pb-2'>+</button>
        </div>


      </div>
      
      
    </div>
    </div>
  )
}

export default Dashboard
