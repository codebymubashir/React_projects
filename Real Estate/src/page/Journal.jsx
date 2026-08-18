import React from 'react'
import Navbar from '../components/Navbar'
const Journal = () => {
  return (
    <div>
      <Navbar />
      <div className='journalimg'>
        <div className='wrapper'>
          <div className='w-full relative z-10'>
            <div className='page1 flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-16 px-5 sm:px-8 md:px-16 pt-28 pb-16 md:pt-24 md:pb-24 max-w-7xl mx-auto'>
              <div className='w-full md:w-[50%] flex flex-col gap-4 sm:gap-5'>
                <h1 className='frances text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Notes on the 
                  <span className='text-[#a48d5d]'>Bahawalpur </span>property market
                </h1>
                <p className='text-[#d8d9d1] mt-2 sm:mt-4 text-sm md:text-base max-w-sm leading-relaxed'>
                  Market reads, buying guides, and the occasional opinion piece — written by our own agents, not syndicated.
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal
