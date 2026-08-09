import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { Smile, ChevronDown, X } from 'lucide-react'
import { FaUserCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"


const Accountprofile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
  const [isOpen7, setIsOpen7] = useState(false)
  const [isOpen8, setIsOpen8] = useState(false)
  const [isOpen9, setIsOpen9] = useState(false)
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [statusText, setStatusText] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("America/Los_Angeles");
  const [search, setSearch] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [clearAfter, setClearAfter] = useState("Today");
  const [clearance, setClearance] = useState("");
  const [rendclearance, setRendClearance] = useState("")
  const [time, setTime] = useState("")


  const options = ["Never", "30 minutes", "1 hour", "Today", "A week", "Custom"];


  const timezones = Intl.supportedValuesOf('timeZone');

  const filteredTimezones = timezones.filter((tz) =>
    tz.toLowerCase().includes(search.toLowerCase())
  );

  const emojiFunction = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
    setEmojiPicker(false);
  }

  useEffect(() => {
    if (!isOpen4) {
      setEmojiPicker(false);
    }
  }, [isOpen4])


  useEffect(() => {

    if (isOpen) {
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen6(false);
      setIsOpen7(false);
      setIsOpen9(false);
    }

    if (isOpen2) {
      setIsOpen(false);
      setIsOpen4(false);
      setIsOpen6(false);
      setIsOpen7(false);
      setIsOpen9(false);
    }

    if (isOpen3) {
      setIsOpen(false);
      setIsOpen4(false);
      setIsOpen6(false);
      setIsOpen7(false);
      setIsOpen9(false);
    }

    if (isOpen4) {
      setIsOpen(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen6(false);
      setIsOpen7(false);
    }

    if (isOpen6) {
      setIsOpen(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
      setIsOpen7(false);
      setIsOpen9(false);
    }

    if (isOpen7) {
      setIsOpen(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
      setIsOpen6(false);
      setIsOpen9(false);
    }

    if (!isOpen7) {
      setIsOpen8(false);
    }

    if (isOpen9) {
      setIsOpen(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
      setIsOpen6(false);
      setIsOpen7(false);
    }

  }, [isOpen, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6, isOpen7, isOpen8, isOpen9])


  return (
    <>



      {/* contact methods state */}
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



      {/* contact method another state */}

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



      {/* Display Name state */}

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
              value={firstNameInput}
              onChange={(e) => setFirstNameInput(e.target.value)}
              className='bg-transparent text-white text-lg font-semibold w-full outline-none'
            />
          </div>

          <div className='pdiv rounded-lg border border-[#1f3d31] p-3'>
            <label className='text-[#52675c] text-sm block'>Last name</label>
            <input
              type='text'
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
              className='bg-transparent text-white text-lg font-semibold w-full outline-none'
            />
          </div>
        </div>
        <div className='w-full h-auto mt-58'>
          <button
            onClick={() => {
              setFirstName(firstNameInput.trim());
              setLastName(lastNameInput.trim());
              setIsOpen3(false);
            }}
            className='w-full rounded-4xl text-xl text-white bg-[#03d47c] font-bold p-4'>Save</button>
        </div>
      </div>




      {/* status state */}

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
        <div className='bg-[#061b09] pt-4 w-full max-w-md flex flex-col gap-2'>
          <div onClick={() => setIsOpen9(true)} className='pdiv rounded-lg p-2 flex flex-row justify-between items-center cursor-pointer'>
            <div>
              <h2 className='text-[#52675c] text-sm'>Clear after</h2>
              <p className='text-white text-base font-semibold'>{rendclearance || "Today"}</p>
            </div>
            <FaChevronRight className='text-[#52675c]' />
          </div>

          <hr className='border-[#1f3d31]' />
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-white text-lg'>Vacation delegate</h1>
            <p className='text-white/80 text-base'>
              Set a vacation delegate to approve reports on your behalf while you're out of office.
            </p>
          </div>

          <div className='pdiv rounded-lg p-2 flex flex-row justify-between items-center cursor-pointer'>
            <p className='text-[#52675c] text-base'>Vacation delegate</p>
            <FaChevronRight className='text-[#52675c]' />
          </div>
        </div>
        <div onClick={() => {
          setStatus(statusText.trim())
          setIsOpen4(false)
        }} className='w-full h-auto mt-4'>
          <button className='w-full rounded-4xl text-xl text-white bg-[#03d47c] font-bold p-4'>Save</button>
        </div>
      </div>


      {/* timezone state */}

      {isOpen5 && (
        <div onClick={() => setIsOpen5(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen5 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen5(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Time Zone</h1>
        </div>
        <div>
          <p className='text-white text-base mt-4 '>Your timezone is shown on your profile.</p>
        </div>
        <div className='flex flex-row gap-12'>
          <p className='text-white text-sm mt-4 '>Automatically determine your location</p>
          <div className=' mt-2.5'>
            <label class="switch">
              <input type="checkbox" class="checkbox" />
              <div class="slider"></div>
            </label>
          </div>
        </div>
        <div className='mt-6'>
          <div onClick={() => setIsOpen6(true)} className='pdiv rounded-lg p-2 flex flex-row'>
            <div className=' w-full text-white'>
              <h2 className='text-white/80 text-xs'>Timezone</h2>
              <p className='text-white text-lg'>America</p>
            </div>
            <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
          </div>
        </div>
      </div>

      {/* timezone another state */}

      {isOpen6 && (
        <div onClick={() => setIsOpen6(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen6 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen6(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Time Zone</h1>
        </div>
        <div>
          <div className='bg-[#07271F] w-full mt-5 max-w-md mx-auto'>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search timezone..."
              className='w-full p-2 bg-[#0d2e21] text-white  border border-[#2FE38A]'
            />

            <div className='max-h-[350px] overflow-y-auto'>
              {filteredTimezones.map((tz) => (
                <div
                  key={tz}
                  onClick={() => setSelected(tz)}
                  className='flex justify-between items-center px-6 py-5 border-b border-[#0d2e21] cursor-pointer hover:bg-[#0d2e21]'
                >
                  <p className='text-white font-bold'>{tz}</p>

                  {selected === tz ? (
                    <div className='w-7 h-7 rounded-full bg-[#2FE38A] flex justify-center items-center'>
                      <FaCheck className='text-black text-sm' />
                    </div>
                  ) : (
                    <div className='w-7 h-7 rounded-full border-2 border-[#2FE38A]' />
                  )}
                </div>
              ))}
            </div>
            <div>
              <button onClick={() => {
                setTime(selected.trim());
                setIsOpen6(false);
              }} className='w-full rounded-4xl text-xl mt-9 text-white bg-[#03d47c] font-bold p-4'>
                Save
              </button>
            </div>

          </div>
        </div>
      </div>



      {/* private state */}
      {isOpen7 && (
        <div onClick={() => setIsOpen7(false)} className="fixed inset-0 bg-black/40 z-40" />
      )}
      <div className={`fixed top-0 right-0 h-screen scrollbar-none w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-50 p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen7 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen7(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Personal Details</h1>
        </div>
        <div className='bg-[#061b09] pt-6  w-full  flex flex-col gap-5'>
          <h1 className='font-bold text-white text-sm'>Basic details</h1>
          <div className='flex flex-col gap-1'>
            <input
              type='text'
              placeholder='Legal first name'
              className='w-full bg-transparent border rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200 border-[#1f3d31] focus:border-[#03d47c]' />
          </div>

          <input
            type='text'
            placeholder='Legal last name'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <div className='flex flex-col gap-1'>
            <label className='text-[#52675c] text-sm'>Date</label>
            <input
              type='date'
              placeholder='YYYY-MM-DD'
              className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-[#52675c]  placeholder-[#52675c] outline-none transition-colors duration-200'
            />
          </div>

          <input
            type='tel'
            placeholder='Phone number'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <h1 className='font-bold text-white text-sm mt-2'>Address</h1>

          <input
            type='text'
            placeholder='Address line 1'
            className='w-full bg-transparent required border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <input
            type='text'
            placeholder='Address line 2'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <input
            type='text'
            placeholder='City'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <input
            type='text'
            placeholder='State / Province'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />

          <input
            type='text'
            placeholder='Zip / Postcode'
            className='w-full bg-transparent border border-[#1f3d31] focus:border-[#03d47c] rounded-lg p-4 text-white placeholder-[#52675c] outline-none transition-colors duration-200'
          />
          <div className='pdiv rounded-lg p-4 flex flex-row justify-between items-center cursor-pointer'>
            <div>
              <h2 className='text-[#52675c] text-sm'>Country</h2>
              <p className='text-white text-lg font-semibold'>Pakistan</p>
            </div>
            <FaChevronRight className='text-[#52675c]' />
          </div>
          <button onClick={() => setIsOpen7(false)} className='w-full rounded-4xl text-xl text-white bg-[#03d47c] font-bold p-4 mt-2'>
            Save
          </button>
        </div>

      </div>


      {/* pronouns state */}
      {isOpen8 && (
        <div onClick={() => setIsOpen8(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen8 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen8(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Pronouns</h1>
        </div>
        <div className='mt-5'>
          <p className='text-white'>Your pronouns are shown on your profile.</p>
        </div>
        <div className='mt-5'>
          <input className='w-full p-1 text-white border-[#153427] ' placeholder='search to see options' type="text" />
        </div>
      </div>


      {/* Status clear state */}
      {isOpen9 && (
        <div onClick={() => setIsOpen9(false)} className="fixed inset-0 bg-black/40 z-[60]" />
      )}
      <div className={`fixed top-0 right-0 h-screen scrollbar-none w-full sm:w-[420px] bg-[#061b09] shadow-2xl z-[70] p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen9 ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex flex-row gap-2'>
          <p onClick={() => setIsOpen9(false)} className='text-[#52675c] pt-4'><FaChevronLeft /></p>
          <h1 className='font-bold text-white text-base mt-3'>Clear After</h1>
        </div>
        <div className='bg-[#061b09] pt-6 w-full  flex flex-col justify-between h-auto'>
          <div className='flex flex-col gap-8'>
            <h1 className='font-bold text-white text-base'>When should we clear your status?</h1>

            <div className='flex flex-col gap-8'>
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => setClearance(option)}
                  className='flex flex-row justify-between items-center cursor-pointer'
                >
                  <p className='text-white text-lg font-semibold'>{option}</p>

                  {clearance === option ? (
                    <div className='w-7 h-7 rounded-full bg-[#2FE38A] flex justify-center items-center'>
                      <FaCheck className='text-black text-sm' />
                    </div>
                  ) : (
                    <div className='w-7 h-7 rounded-full border-2 border-[#2FE38A]' />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => {
            setRendClearance(clearance.trim());
            setIsOpen9(false);
          }} className='w-full rounded-4xl text-xl mt-9 text-white bg-[#03d47c] font-bold p-4'>
            Save
          </button>
        </div>
      </div>





      {/* Real UI  */}

      <div className='w-full h-15  text-white flex flex-row gap-2 p-2 pl-4  '>
        <FaUserCircle size={40} className='text-[#4ed7de]' />
        <h2 className='frances text-2xl mt-1'>Profile</h2>

      </div>
      <div className='w-170 h-auto  mt-10 ml-4 p-8 flex flex-col gap-4 rounded-2xl  bg-[#072419]'>
        <div>
          <p className='frances text-2xl text-white'>Public</p>
          <p className='text-md text-white/80'>These details are displayed on your public profile. Anyone can see them.</p>
        </div>
        <LuCircleUserRound size={100} className='text-white' />
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div onClick={() => setIsOpen3(true)} className=' w-full text-white'>
            <h2 className='text-white/80 text-sm'>Display Name</h2>
            <div className='flex flex-row gap-1 text-base text-white'>
              <p>{firstName || "Mubashir"}</p>
              <p>{lastName || "Imran"}</p>
            </div>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div onClick={() => setIsOpen(true)} className=' w-full text-white'>
            <h2 className='text-white/80 text-sm'>Contact Methods</h2>
            <p>Unimubashir2@gmail.com</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div onClick={() => setIsOpen4(true)} className='pdiv rounded-lg p-2 flex flex-row'>
          <div className=' w-full text-white'>
            <h2 className='text-white/80 text-sm'>Status</h2>
            <div className='flex flex-row gap-1'>
              {selectedEmoji && <span>{selectedEmoji}</span>}
              <p className='text-white'>{statusText}</p>

            </div>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div onClick={() => setIsOpen8(true)} className=' w-full text-white'>
            <h2 className='text-white/80 text-sm'>Pronouns</h2>
            <p>Select your pronouns</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>
        <div className='pdiv rounded-lg p-2 flex flex-row'>
          <div onClick={() => setIsOpen5(true)} className=' w-full text-white'>
            <h2 className='text-white/80 text-sm'>Timezone</h2>
            <p>{time || "America"}</p>
          </div>
          <p className='text-[#52675c] pt-4'><FaChevronRight /></p>
        </div>

        <button className='w-[12%] h-10 rounded-4xl bg-[#1A3D32] hover:bg-green-400 flex justify-center items-center text-center font-semibold m-2 text-white'>Share</button>
      </div>
      <div className='bg-[#072419]   w-[75%] h-auto rounded-xl m-5 p-7 flex flex-col gap-9'>

        <p className='frances text-2xl text-white'>Private</p>
        <p className='text-md text-white/80'>These details are used for travel and payments. They're never shown on your public profile.</p>

        <div onClick={() => setIsOpen7(true)} className='flex flex-col gap-5'>
          <div className='hover:bg-[#0A2E25] flex justify-between item-center p-3'>
            <p className='text-base text-white/80'>Legal Name</p>
            <p className='text-[#52675c] pt-2'><FaChevronRight /></p>
          </div>

          <div className='hover:bg-[#0A2E25]  flex justify-between item-center p-3'>
            <p className='text-base text-white/80'>Date of Birth</p>
            <p className='text-[#52675c] pt-2'><FaChevronRight /></p>
          </div>

          <div className='hover:bg-[#0A2E25] flex justify-between item-center p-3'>
            <p className='text-base text-white/80'>Phone Number</p>
            <p className='text-[#52675c] pt-2'><FaChevronRight /></p>
          </div>

          <div className='hover:bg-[#0A2E25] flex justify-between item-center p-3'>
            <p className='text-base text-white/80'>Address</p>
            <p className='text-[#52675c] pt-2'><FaChevronRight /></p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Accountprofile