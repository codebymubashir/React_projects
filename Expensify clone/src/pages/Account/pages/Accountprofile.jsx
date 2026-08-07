import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { Smile, ChevronDown, X } from 'lucide-react'


const Accountprofile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [statusText,setStatusText] = useState("");
  const [name,setName] = useState("");

  const emojiFunction = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
    setEmojiPicker(false);
  }

  useEffect(() => {
    if (!isOpen4) {
      setEmojiPicker(false);
    }
  }, [isOpen4])


  return (
    <>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 z-40" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-50 p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Contact methods</h1>
        </div>
        <div className=' w-85 flex flex-col gap-5 mt-8' >
          <p className='text-white text-base'>Add more ways to log in and send receipts to Expensify.</p>
          <p className='text-white text-base'>Add an email address to forward receipts to <span className='text-[#56a9f4]'>receipts@expensify.com</span> or add a phone number to text receipts to 47777 (US numbers only).</p>
          <div onClick={() => setIsOpen2(true)} className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-white text-base'>Unimubashir2@gamil.com</h2>
              <p className='text-[#52675c] text-sm'>we'll use this method to contact you.</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
          </div>
        </div>
      </div>

      {isOpen2 && (
        <div onClick={() => setIsOpen2(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen2 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen2(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Email details</h1>
        </div>
        <div className='mt-6'>
          <p className='text-white text-base'>This is your current default contact method. Before you can delete it, you'll need to choose another contact method and click "Set as default".</p>
        </div>
      </div>

      {isOpen3 && (
        <div onClick={() => setIsOpen3(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen3 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen3(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Display Name</h1>
        </div>
        <div className='mt-6'>
          <p className='text-base text-white'>Your display name is shown on your profile.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='pdiv rounded-lg border border-[#1f3d31] p-3'>
            <label className='text-[#52675c] text-sm block'>First name</label>
            <input
              type='text'
              className='bg-transparent text-white text-lg font-semibold w-full outline-none'
            />
          </div>

          <div className='pdiv rounded-lg border border-[#1f3d31] p-3'>
            <label className='text-[#52675c] text-sm block'>Last name</label>
            <input
              type='text'
              className='bg-transparent text-white text-lg font-semibold w-full outline-none'
            />
          </div>
        </div>
        <div className='w-full h-auto mt-75'>
          <button className='w-full rounded-4xl text-xl text-white bg-[#03d47c] font-bold p-4'>Save</button>
        </div>
      </div>


      {isOpen4 && (
        <div onClick={() => setIsOpen4(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen4 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen4(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Status</h1>
        </div>
        <div className='mt-6'>
          <p className='text-white text-base'>Set your status with an emoji and optional message.</p>
        </div>

        <div className='relative w-[30%] h-12 rounded-4xl bg-[#1A3D32] hover:bg-green-400 flex gap-2 justify-center items-center text-center font-semibold m-3'>
          <div id='emojiDiv'>
            {selectedEmoji ? (
              <span className='text-2xl leading-none'>{selectedEmoji}</span>
            ) : (
              <Smile size={25} className='text-white' />
            )}
          </div>
          <ChevronDown onClick={() => setEmojiPicker(true)} size={25} className='text-white' />

          {
            emojiPicker && (
              <div className='absolute top-14 left-0 z-[80] rounded-lg bg-[#061B09] shadow-2xl'>
                <div className='flex justify-end p-1'>
                  <X onClick={() => setEmojiPicker(false)} size={20} className='text-white cursor-pointer' />
                </div>
                <EmojiPicker onEmojiClick={emojiFunction} theme="dark" width={300} height={370} />
              </div>
            )
          }
          
        </div>
        <div>
            <input
              type='text'
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              placeholder='Message'
              className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-2xl p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
            />
          </div>
          <div onClick={()=>setIsOpen4(false)} className='w-full h-auto mt-75'>
          <button className='w-full rounded-4xl text-xl text-white bg-[#03d47c] font-bold p-4'>Save</button>
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
          <div onClick={() => setIsOpen3(true)} className=' w-full text-white'>
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
        <div onClick={() => setIsOpen4(true)} className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-[#52675c] text-sm'>Status</h2>
            <div className='flex flex-row gap-1'>
              {selectedEmoji && <span>{selectedEmoji}</span>}
              <p className='text-white'>{statusText}</p>
              
            </div>
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