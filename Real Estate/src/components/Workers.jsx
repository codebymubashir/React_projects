import React from 'react'

const Workers = ({ img, name, position }) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full h-[420px] overflow-hidden'>
        <img
          className='workerimg w-full h-full object-cover object-top'
          src={img}
          alt={name}
        />
      </div>
      <p className='text-xl font-bold frances mt-3'>{name}</p>
      <p className='text-base text-[#C9A868]'>{position}</p>
    </div>
  )
}

export default Workers