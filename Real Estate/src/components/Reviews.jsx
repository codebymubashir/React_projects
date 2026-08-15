import React from 'react'
import { FaStar } from "react-icons/fa";
const Reviews = ({ des, img, name, subname }) => {
    return (
        <div className='w-70 md:w-85 h-auto p-8 mt-10 flex flex-col gap-4 bg-[#1D3229]'>
            <div className='flex flex-row text-sm text-yellow-400'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div>
                <p className='frances text-xl text-white'>{des}</p>
            </div>
            <div className='flex flex-row gap-2'>
                <img className='w-10 h-10 rounded-4xl ' src={img} alt="" />
                <div className='flex flex-col '>
                    <p className='font-bold text-base text-white '>{name}</p>
                    <p className='text-sm text-[#9DA295] '>{subname}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
