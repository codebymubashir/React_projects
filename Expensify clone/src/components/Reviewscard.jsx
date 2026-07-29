import React from 'react'
import { FaStar } from "react-icons/fa";

const Reviewscard = ({ image, title, des, icon, heading }) => {
    return (
        <div className='w-75 h-90 text-white rounded-lg p-4 flex flex-col gap-4 pt-8 bg-[#07271f]'>
            <div className='flex flex-row text-2xl text-yellow-400'>
                <FaStar/>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <h2 className='frances text-2xl'>{title}</h2>
            <p className='text-sm'>{des}</p>
            <div className='flex flex-row gap-3 '>
                <img className='w-10 h-10' src={image} alt="" />
                <h2 className='font-bold mt-2'>{heading}</h2>
            </div>
        </div>
    )
}

export default Reviewscard
