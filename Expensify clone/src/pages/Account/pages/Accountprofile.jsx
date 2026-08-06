import React from 'react'
import { CgProfile } from "react-icons/cg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";


const Accountprofile = () => {
  return (
    <>
    
        <div className='w-full h-15  text-white flex flex-row gap-2 p-2 pl-4  '>
            <CgProfile size={40} />
            <h2 className='frances text-2xl'>Profile</h2>
            
        </div>
        <div className='w-150 h-auto mt-10 ml-4 p-8 flex flex-col gap-4 rounded-2xl border border-white bg-[#072419]'>
         <div>
           <p className='frances text-2xl text-white'>Public</p>
          <p className='text-md text-white/80'>These details are displayed on your public profile. Anyone can see them.</p>
         </div>
          <LuCircleUserRound size={100} className='text-white'/>
          <div className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-[#52675c] text-sm'>Display Name</h2>
              <p>Mubashir Imran</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight/></p>
          </div>
          <div className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-[#52675c] text-sm'>Contact Methods</h2>
              <p>Unimubashir2@gmail.com</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight/></p>
          </div>
          <div className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-[#52675c] text-sm'>Pronouns</h2>
              <p>Select your pronouns</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight/></p>
          </div>
          <div className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-[#52675c] text-sm'>Timezone</h2>
              <p>America</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight/></p>
          </div>

          <button className='rounded-2xl p-2 text-white bg-[#1a3d32]'>Share</button>
        </div>

    </>
  )
}

export default Accountprofile
