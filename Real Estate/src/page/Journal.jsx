import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Journal = () => {




  return (
    <div>
      <Navbar />
      <div className='journalimg'>
        <div className='wrapper'>
          <div className='w-full relative z-10'>
            <div className='page1 flex flex-col md:flex-row items-start md:items-center justify-start gap-10 md:gap-16 px-5 sm:px-8 md:px-16 pt-28 pb-16 md:pt-24 md:pl-10 md:pb-24 max-w-7xl mx-auto'>
              <div className='w-full md:w-full flex flex-col gap-4 sm:gap-5'>
                <h1 className='frances text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:pt-10 text-white leading-tight'>
                  Notes on the
                  <span className='text-[#a48d5d]'>Bahawalpur  <br /> </span>property market
                </h1>
                <p className='text-[#d8d9d1] mt-2 sm:mt-4 text-sm md:text-base max-w-sm leading-relaxed'>
                  Market reads, buying guides, and the occasional opinion piece — written by our own agents, not syndicated.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination />
      </div>


      <div className='w-full h-auto md:mt-20 flex flex-col gap-4 p-6 text-center md:p-20 md:px-50 border-2 border-black bg-orange-900'>
        <h2 className='frances text-white text-2xl sm:text-3xl md:text-5xl'>Not finding the right fit yet?</h2>
        <p className='text-gray-300 text-sm'>Tell us your brief and we'll match you privately, before a listing goes public.</p>
        <Link to={"/contact"}><button className='redsecbtn border border-white p-4 w-full md:w-60 md:mx-auto md:mt-5 text-center font-bold text-white bg-transparent'>Share Your Breif</button></Link>

      </div>

      <Footer/>
    </div>
  )
}

export default Journal
