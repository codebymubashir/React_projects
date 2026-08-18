import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contactimg'>
        <div className='wrapper'>
          <div className='w-full relative z-10'>
            <div className='page1 flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-16 px-5 sm:px-8 md:px-16 pt-28 pb-16 md:pt-24 md:pb-24 max-w-7xl mx-auto'>
              <div className='w-full md:w-1/2 flex flex-col gap-4 sm:gap-5'>
                <p className='font-mono text-[10px] sm:text-xs tracking-widest uppercase text-[#A6811A]'>
                  EST.1996 — BAHAWALPUR % BEYOND
                </p>
                <h1 className='frances text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Every house has a story.{' '}
                  <span className='text-[#a48d5d]'>Tell us yours.</span>
                </h1>
                <p className='text-[#d8d9d1] mt-2 sm:mt-4 text-sm md:text-base max-w-sm leading-relaxed'>
                  One conversation is usually all it takes to know if a property is right — start it here, and an agent will call within the day.
                </p>
              </div>
              <div className='w-full md:w-1/2 md:ml-25 lg:w-[420px] p-6 sm:p-8 md:p-10 bg-[#12231C] rounded-lg border border-[#c9a868]/20'>
                <form className='flex flex-col gap-5 sm:gap-6'>
                  <div>
                    <label className='block font-serif text-[10px] tracking-[0.18em] uppercase text-[#c9a868] mb-2'>
                      Full name
                    </label>
                    <input
                      type='text'
                      placeholder='Jane Whitfield'
                      required
                      className='w-full bg-transparent border-0 border-b border-[#d8d9d1]/30 text-[#f4efe4] text-sm py-2 px-0.5 outline-none placeholder:text-[#f4efe4]/35 focus:border-[#c9a868] transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block font-serif text-[10px] tracking-[0.18em] uppercase text-[#c9a868] mb-2'>
                      Email address
                    </label>
                    <input
                      type='email'
                      placeholder='jane@email.com'
                      required
                      className='w-full bg-transparent border-0 border-b border-[#d8d9d1]/30 text-[#f4efe4] text-sm py-2 px-0.5 outline-none placeholder:text-[#f4efe4]/35 focus:border-[#c9a868] transition-colors'
                    />
                  </div>
                  <div>
                    <label className='block font-serif text-[10px] tracking-[0.18em] uppercase text-[#c9a868] mb-2'>
                      Your message
                    </label>
                    <textarea
                      rows='4'
                      placeholder='Tell us what you are looking for...'
                      required
                      className='w-full bg-transparent border-0 border-b border-[#d8d9d1]/30 text-[#f4efe4] text-sm py-2 px-0.5 outline-none placeholder:text-[#f4efe4]/35 focus:border-[#c9a868] transition-colors resize-none'
                    ></textarea>
                  </div>

                  <button
                    className='border border-[#c9a868] text-[#c9a868] hover:bg-[#c9a868] hover:text-[#12231c] font-serif tracking-[0.16em] uppercase text-xs py-3 sm:py-3.5 transition-colors'
                  >
                    Send inquiry
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block w-full h-screen p-44'>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
            className="w-full h-80 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        

      </div>
      <div className='w-full h-10 block md:hidden'>

        </div>
        <Footer/>
    </div>
  )
}

export default Contact