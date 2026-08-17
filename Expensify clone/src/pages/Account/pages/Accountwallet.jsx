import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { GiTakeMyMoney } from "react-icons/gi";
import Walletpic from '../../../assets/Walletpic.png'

const Accountwallet = () => {
    const { dark } = useOutletContext();

    return (
        <>
            <div className={`w-full h-15 ${dark ? 'text-white' : 'text-[#0B2E1F]'} flex flex-row gap-2 p-2 pl-4`}>
                <GiTakeMyMoney size={40} />
                <h2 className='frances text-2xl'>Wallet</h2>
            </div>
            <div className={`h-[75vh] m-5 w-[75%] rounded-2xl ${dark ? 'bg-[#072419]' : 'bg-white border border-gray-200'}`}>
                <div className='bg-center bg-cover h-[50%] w-full rounded-t-2xl' style={{ backgroundImage: `url(${Walletpic})` }}>

                </div>

                <div className={`h-auto rounded-xl m-5 p-7 flex flex-col gap-9 ${dark ? 'bg-[#072419]' : 'bg-white'}`}>

                    <div className='flex flex-col gap-2'>
                        <p className={`text-xl font-bold ${dark ? 'text-white' : 'text-[#0B2E1F]'}`}>Bank accounts</p>
                        <p className={`text-sm ${dark ? 'text-white/80' : 'text-gray-500'}`}>Add a bank account to make or receive payments.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className={`p-3 ${dark ? 'hover:bg-[#0A2E25]' : 'hover:bg-gray-100'}`}>
                            <p className={`text-md ${dark ? 'text-white/80' : 'text-gray-500'}`}>Add a bank account</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Accountwallet