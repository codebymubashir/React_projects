import React from 'react'
import Dashboard from '../components/Dashboard'
import Greenbtn from '../components/Greenbtn'
const Inbox = () => {
  return (
    <>
      <div className='flex flex-row'>
      <Dashboard/>
      <div className='w-full h-screen  bg-[#061b09]'>
        <div className='w-90 h-screen border-2 border-[#1a3d32]'>
            <h1 className='frances text-white text-4xl p-4'>Inbox</h1>
            <div className='w-full h-20 flex flex-row gap-3 p-4 text-white'>
                <button className='icons font-bold rounded-4xl border w-30 h-10' >All</button>
                <button className='icons font-bold rounded-4xl border w-30 h-10' >Unread</button>
                <button className='icons font-bold rounded-4xl border w-30 h-10' >To dos</button>

            </div>
            <div className='w-full h-20 border border-white '>
                <div className='flex flex-col text-white p-3'>
                    <h2 className='text-2xl font-bold'>Natasha</h2>
                    <p>No, I'm just an Expensify assistant</p>
                </div>

            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inbox
