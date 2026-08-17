import React from 'react'

const Featurcard = ({dark, title, image, des, btn}) => {
  return (
    <div className={`w-85 h-55 rounded-xl p-8 flex flex-col gap-4 ${dark ? "bg-[#07271f]" : "bg-white border border-gray-200"}`}>
      <div className='flex flex-row gap-3'>
        <img className='w-10 h-10' src={image} alt="" />
        <h3 className={`text-xl ${dark ? "text-white" : "text-black"}`}>{title}</h3>
      </div>
        <p className={`text-sm ${dark ? "text-white" : "text-black"}`}>{des}</p>
        <button className='text-base mr-auto text-[#5AB0FF]'>{btn}</button>
    </div>
  )
}

export default Featurcard