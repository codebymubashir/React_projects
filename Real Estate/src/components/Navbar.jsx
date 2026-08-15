import React from 'react'
import Homeicon from '../assets/icon-transparent.png'
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='nav w-full h-auto flex flex-row items-center justify-between px-5 py-4 md:pl-12 md:px-5 relative'>
                <Link to={"/"}> <div className='flex items-center gap-1'>
                    <img src={Homeicon} alt="Logo" className='w-8 h-8 object-contain' />
                    <p className='frances text-white text-base md:text-2xl font-semibold'>Vintage <span className='text-[#c9a868]'>Estates</span> </p>
                </div></Link>
                <div className='md:hidden'>
                    <button onClick={() => setOpen(!open)}><MdOutlineMenu size={30} color='white' /></button>
                </div>
                {open && (
                    <ul className='absolute top-full left-0 w-full bg-[#a48d5d] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-50'>
                        <Link to={"/"} onClick={() => setOpen(false)}> <li className='frances text-black text-base font-semibold'>Home</li></Link>
                        <li className='frances text-black text-base font-semibold'><a href="">Listings</a></li>
                        <li className='frances text-black text-base font-semibold'><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                        <li className='frances text-black text-base font-semibold'><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a></li>
                        <Link to={"/contact"} onClick={() => setOpen(false)}> <li className='frances text-black text-base font-semibold'>Contact</li></Link>
                    </ul>
                )}
                <div className='hidden md:block'>
                    <ul className='flex flex-row items-center text-white uppercase gap-4 lg:gap-6 text-sm lg:text-base'>
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