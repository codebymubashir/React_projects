import React from 'react'
import Navbar from '../components/Navbar'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contactimg'>
        <div className='wrapper'>
          <div className='w-full relative z-10'>
            <div className='w-full md:w-[50%] p-5 md:pl-10 md:pt-45 flex flex-col gap-4 md:h-screen'>
              <p className='monospace font-mono text-xs tracking-widest uppercase text-[#A6811A]'>EST.1996 — BAHAWALPUR % BEYOND</p>
              <h1 className='frances text-3xl sm:text-4xl md:text-6xl font-bold text-white'>Every house
                has a story.<span className='text-[#a48d5d]'>Tell us yours.</span></h1>
              <p className='text-[#d8d9d1] mt-6 text-sm md:text-base max-w-sm leading-relaxed'>One conversation is usually all it takes to know if a property is right — start it here, and an agent will call within the day.</p>
            </div>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
