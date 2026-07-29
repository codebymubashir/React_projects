import React from 'react'

const Featurcard = ({title,image,des,btn}) => {
  return (
    <div className='w-85 h-55 rounded-xl p-8 flex flex-col  gap-4 bg-[#07271f]'>
      <div className='flex flex-row gap-3 '>
        <img className='w-10 h-10' src={image} alt="" />
        <h3 className='text-white text-xl'>{title}</h3>
      </div>
        <p className='text-sm text-white'>{des}</p>
        <button className='text-base mr-auto text-[#5AB0FF]'>{btn}</button>
    </div>
  )
}

export default Featurcard
