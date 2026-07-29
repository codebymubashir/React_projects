import React from 'react'
import { FaStar } from "react-icons/fa";

const Reviewscard = ({ image, title, des, icon, heading }) => {
    return (
        <div className='w-75 h-auto rounded-lg p-8 flex flex-col gap-4 bg-[#07271f]'>
            <div className='flex flex-row text-yellow-400'>
                <FaStar/>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <h2>{title}</h2>
            <p>{des}</p>
            <div className='flex flex-row gap-3 '>
                <img className='w-12 h-12' src={image} alt="" />
                <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default Reviewscard
