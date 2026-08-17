import React from 'react'

const Card = ({dark, title}) => {
  return (
    <div className={dark?"w-[33%] h-30 border-2 relative border-white p-6 ml-0 bg-[#0B2E1F] rounded-2xl justify-center items-center":"w-[33%] h-30 border-2 relative border-[#0F3B29] p-6 ml-0 bg-white rounded-2xl justify-center items-center"}>
      <p className='text-black'>{title}</p>
    </div>
  )
}

export default Card
