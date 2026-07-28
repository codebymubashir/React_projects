import React from 'react'

const Card = ({title}) => {
  return (
    <div className='w-[33%] h-30 border-2 relative border-white p-6 ml-0 bg-[#0F3B29] rounded-2xl justify-center items-center'>
      <p>{title}</p>
    </div>
  )
}

export default Card
