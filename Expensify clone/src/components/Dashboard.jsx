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
    <div className='flex flex-row h-full overflow-hidden'>

      <div className='w-20 h-full bg-[#061b09] border flex flex-col justify-between shrink-0'>

        <div className='w-full h-94 flex flex-col text-4xl gap-6 p-3 items-center'>

          <Link to={"/homes"} className='flex flex-col icons items-center gap-1 text-[#8b9c8f]'>
            <IoMdHome className=' w-8 h-8' />
            <p className=' text-[10px] font-bold'>Home</p>
          </Link>

          <Link to={"/Inbox"} className='flex flex-col icons items-center gap-1 text-[#8b9c8f]'>
            <MdInbox className='icons w-8 h-8' />
            <p className='text-[10px]'>Inbox</p>
          </Link>

          <Link to={"/Spend"} className='flex flex-col icons items-center gap-1 text-[#8b9c8f]'>
            <FaReceipt className='icons w-8 h-8' />
            <p className='text-[10px]'>Spend</p>
          </Link>

          <Link to={"/Worksp"} className='flex flex-col icons items-center gap-1 text-[#8b9c8f]'>
            <HiBuildingOffice2 className='icons w-8 h-8' />
            <p className='text-[10px]'>Workspaces</p>
          </Link>

          <Link to={"/Accounts"} className='flex flex-col icons items-center gap-1 text-[#8b9c8f]'>
            <MdManageAccounts className='icons w-8 h-8' />
            <p className='text-[10px]'>Account</p>
          </Link>


        </div>

        <div className='flex flex-col gap-9 p-5 w-full h-55'>
          <LuScanText className='text-[#8b9c8f] icons text-4xl mt-10 w-8 h-8' />
          <IoAdd className='text-[#8b9c8f] icons text-4xl w-8 h-8' />
        </div>

      </div>

      {/* Main content area - ye hi scroll hoga, sidebar fixed rahega */}
      <div className='flex-1 h-full overflow-y-auto'>
        {/* apna dashboard content yahan daalo */}
      </div>

    </div>
  )
}

export default Dashboard