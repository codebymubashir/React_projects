import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa";


const Accountprofile = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 z-40"/>
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-50 p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p  onClick={() => setIsOpen(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Contact methods</h1>
        </div>
        <div className=' w-85 flex flex-col gap-5 mt-8' >
          <p className='text-white text-base'>Add more ways to log in and send receipts to Expensify.</p>
          <p className='text-white text-base'>Add an email address to forward receipts to <span className='text-[#56a9f4]'>receipts@expensify.com</span> or add a phone number to text receipts to 47777 (US numbers only).</p>
          <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-white text-base'>Unimubashir2@gamil.com</h2>
            <p className='text-[#52675c] text-sm'>we'll use this method to contact you.</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        </div>
      </div>

      <div className='w-full h-15  text-white flex flex-row gap-2 p-2 pl-4  '>
        <CgProfile size={40} />
        <h2 className='frances text-2xl'>Profile</h2>

      </div>
      <div className='w-170 h-auto mt-10 ml-4 p-8 flex flex-col gap-4 rounded-2xl  bg-[#072419]'>
        <div>
          <p className='frances text-2xl text-white'>Public</p>
          <p className='text-md text-white/80'>These details are displayed on your public profile. Anyone can see them.</p>
        </div>
        <LuCircleUserRound size={100} className='text-white' />
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-[#52675c] text-sm'>Display Name</h2>
            <p>Mubashir Imran</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div onClick={() => setIsOpen(true)} className=' w-full text-white'>
            <h2 className='text-[#52675c] text-sm'>Contact Methods</h2>
            <p>Unimubashir2@gmail.com</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-[#52675c] text-sm'>Pronouns</h2>
            <p>Select your pronouns</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-[#52675c] text-sm'>Timezone</h2>
            <p>America</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>

        <button className='w-[12%] h-10 rounded-4xl bg-[#1A3D32] hover:bg-green-400 flex justify-center items-center text-center font-semibold m-3 text-white'>Share</button>
      </div>
      <div className='bg-[#072419]  w-[75%] h-auto rounded-xl m-5 p-7 flex flex-col gap-9'>

        <p className='frances text-2xl text-white'>Private</p>
        <p className='text-md text-white/80'>These details are used for travel and payments. They're never shown on your public profile.</p>

        <div className='flex flex-col gap-5'>
          <div className='hover:bg-[#0A2E25] p-3'>
            <p className='text-lg text-white/80'>Legal Name</p>
          </div>

          <div className='hover:bg-[#0A2E25] p-3'>
            <p className='text-lg text-white/80'>Date of birth</p>
          </div>

          <div className='hover:bg-[#0A2E25] p-3'>
            <p className='text-lg text-white/80'>Phone number</p>
          </div>

          <div className='hover:bg-[#0A2E25] p-3'>
            <p className='text-lg text-white/80'>Address</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Accountprofile