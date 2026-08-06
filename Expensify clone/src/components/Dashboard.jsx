import React from 'react'
import { IoMdHome } from "react-icons/io"
import { MdInbox } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuScanText } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import { IoAdd } from "react-icons/io5";


import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-row '>
      <div className='w-20 h-[97vh] bg-[#061b09] border flex flex-col  justify-between'>
        <div className='w-full h-94 flex flex-col text-4xl gap-9  p-5'>
         <Link to={"/homes"}> <IoMdHome  className='text-[#8b9c8f] icons w-8 h-8 '/></Link>
       <Link to={"/Inbox"}><MdInbox  className='text-[#8b9c8f] icons  w-8 h-8 '/></Link>
        <Link to={"/Spend"} ><FaReceipt  className='text-[#8b9c8f] icons w-8 h-8 '/></Link>
        <Link to={"/Worksp"}><HiBuildingOffice2  className='text-[#8b9c8f] icons  w-8 h-8 '/></Link>
        <Link to={"/Accounts"}><MdManageAccounts  className='text-[#8b9c8f] icons  w-8 h-8 '/></Link>
        
        </div>
        <div className=' flex flex-col gap-9 p-5 w-full h-55 '>
          <LuScanText className='text-[#8b9c8f] icons text-4xl mt-10  w-8 h-8 '/>
          <IoAdd className='text-[#8b9c8f] icons text-4xl   w-8 h-8 '/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
