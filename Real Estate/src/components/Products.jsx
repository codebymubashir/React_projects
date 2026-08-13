import React from 'react'

const Products = ({image,title,subtitle,btn1,btn2,btn3}) => {
  return (
    <>
    <div className='w-70 md:w-95 h-auto border flex flex-col gap-4 bg-white group'>
        <div className='overflow-hidden' >
           <img className='w-70 md:w-95 h-55 object-cover transition-transform duration-300 group-hover:scale-110 ' src={image} alt="" />
        </div>
        <div className='flex flex-col ml-2 md:ml-4 p-4 pt-0'>
            <p className='frances text-2xl font-bold'>{title}</p>
            <p className='text-sm text-gray-600'>{subtitle}</p>
        </div>
        <div>
            <ul  className='flex flex-row gap-6 md:gap-14 ml-4 md:ml-8 mb-2 p-4 pt-0 ' >
                <li className='list-disc'>4 Beds</li>
                <li className='list-disc'>3 Baths</li>
                <li className='list-disc'>10 Marla</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Products
