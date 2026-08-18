import React from 'react'
import Homeicon from '../assets/icon-transparent.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='w-full h-auto pt-20 pb-15 pl-10 mt-20 flex flex-col gap-5 md:flex md:flex-row md:justify-around md:pl-0 bg-[#12231C]'>
        <div className=' w-60 h-auto flex flex-col gap-6'>
          <Link to={"/"}> <div className='flex items-center gap-1'>
            <img src={Homeicon} alt="Logo" className='w-8 h-8 object-contain' />
            <p className='frances text-white text-md  md:text-2xl font-semibold'>Vintage <span className='text-[#c9a868]'>Estates</span> </p>
          </div></Link>
          <div className=' w-55 md:w-75 '>
            <p className='text-[#AEB0A3] text-base '>A boutique real estate practice based in Bahawalpur, representing a deliberately small portfolio of homes and plots.</p>
          </div>

        </div>
        <ul className='text-white flex flex-col gap-3'>
          <a href=""><li className='text-[#C9A868] footlist font-bold'>Navigate</li></a>
         <Link to={"/"}> <a href=""><li className='footlist'>Home</li></a></Link>
         <Link to={"/#about"}> <a href="#about"><li className='footlist'>About</li></a></Link>
         <Link to={"/contact"}> <a href="/contact"><li className='footlist'>Contact</li></a></Link>
         <Link to={"/journal"}> <a href=""><li className='footlist'>Journal</li></a></Link>
         <Link> <a href="#reviews"><li className='footlist'>Customer reviews</li></a></Link>
        </ul>
        <ul className=' text-white flex flex-col gap-3'>
         <Link> <a href=""><li className='text-[#C9A868] footlist font-bold'>Property Types</li></a></Link>
         <Link to={"/journal"}> <a href=""><li className='footlist'>House</li></a></Link>
         <Link to={"/journal"}> <a href=""><li className='footlist'>Appartments</li></a></Link>
         <Link to={"/journal"}> <a href=""><li className='footlist'>Villas</li></a></Link>
         <Link to={"/journal"}> <a href=""><li className='footlist'>Plot</li></a></Link>
        </ul>
        <div className='w-60 flex flex-col gap-4'>
          <p className='text-[#C9A868] text-xl font-bold'>Stay Informed</p>
          <p className='text-[#AEB0A3] text-base'>New listings and market notes, once every couple of weeks.</p>
          <input className='border-b-2 border-b-[#C9A868] text-white' type="email" name="" id="" placeholder='Your email' />
        </div>


      </div>
      <div>
        <div className=' w-full h-auto text-center bg-[#12231C] md:flex md:justify-center '>
          <h1 className='fluid-text text-[5rem] md:text-[8rem]'>Real Estates</h1>
        </div>

      </div>
    </>
  )
}

export default Footer