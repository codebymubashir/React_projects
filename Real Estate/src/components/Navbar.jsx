import React from 'react'
import Homeicon from '../assets/icon-transparent.png'
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='nav sm:w-full h-auto flex flex-row justify-between md:pl-12 p-5 relative'>
        <Link to={"/"}> <div className='flex items-center gap-1'>
          <img src={Homeicon} alt="Logo" className='w-8 h-8 object-contain' />
          <p className='frances text-white text-md  md:text-2xl font-semibold'>Vintage <span className='text-[#c9a868]'>Estates</span> </p>
        </div></Link>
        <div className='md:hidden'>
          <button onClick={() => setOpen(!open)}><MdOutlineMenu size={30} /></button>
        </div>
        {open && (
          <ul className='absolute top-full left-0 w-full bg-[#a48d5d] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg'>
            <Link to={"/"}> <li className='frances text-black text-md font-semibold'><a href="">Home</a></li></Link>
            <li className='frances text-black text-md font-semibold'><a href="">Listings</a></li>
            <li className='frances text-black text-md font-semibold'><a href="#about">About</a></li>
            <li className='frances text-black text-md font-semibold'><a href="#reviews">Reviews</a></li>
            <Link to={"/contact"}> <li className='frances text-black text-md font-semibold'><a href="">Contact</a></li></Link>
          </ul>
        )}
        <div className='hidden md:block'>
          <ul className='flex flex-row text-white uppercase gap-4 w-120 h-auto p-5 justify-around '>
            <Link to={"/"}><li>Home</li></Link>
            <a href="#about"><li>About</li></a>
            <li>Journal</li>
            <Link to={"/contact"}> <li>Contact</li></Link>
            <a href="#reviews"><li>Reviews</li></a>

          </ul>
        </div>
      </div>


    </>

  )
}

export default Navbar