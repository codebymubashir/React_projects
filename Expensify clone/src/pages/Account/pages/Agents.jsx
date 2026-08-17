import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { LiaRobotSolid } from "react-icons/lia";
import Robo from '../../../assets/robo.png.png'

const Agents = () => {
  const { dark } = useOutletContext();

  return (
    <>
      <div className='flex flex-row '>
        <div className={`w-full h-15 ${dark ? 'text-white' : 'text-[#0B2E1F]'} flex flex-row gap-2 p-2 pl-4`}>
        <LiaRobotSolid size={40} className='text-sky-400' />
        <h2 className='frances text-2xl mt-1'>Agents</h2>
      </div>
      <div className='mr-2  w-full pl-120 pt-1'>
        <button className='p-3  bg-[#03d47c] text-white rounded-4xl'>+ New Agent</button>
      </div>
      </div>
      <div className=' w-110 p-6 ml-55 mt-25'>
        <img src={Robo} alt="" className='w-60 h-60 ml-19' />
        <div className={`${dark ? 'text-white' : 'text-[#0B2E1F]'} w-90 text-center`}>
          <p className='text-xl fontbold frances'>No agents created</p>
          <p className={`text-sm ${dark ? 'text-[#a7b4a8]' : 'text-gray-500'}`}>Stop manually doing stuff. Instruct an agent instead and save yourself lots of time. <span className='text-[#56a8f3]'>Learn more.</span> </p>
        </div>
      </div>
    </>
  )
}

export default Agents