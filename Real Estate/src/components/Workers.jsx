import React from 'react'

const Workers = ({img,name,position}) => {
  return (
    <>
    <div className='w-70 h-80 md:w-55 md:h-80 flex flex-col '>
        <img className='w-30 md:w-75 h-95 object-cover transition-transform duration-300 group-hover:scale-110 ' src={img} alt="" />
        <p className='text-xl font-bold frances'>{name}</p>
        <p className='text-base text-[#C9A868]'>{position}</p>

    </div>
    </>
  )
}

export default Workers
