import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import Walletpic from '../../../assets/Walletpic.png'
const Accountwallet = () => {
    return (
        <>
            <div className='w-full h-15  text-white flex flex-row gap-2 p-2 pl-4  '>
                <GiTakeMyMoney size={40} />
                <h2 className='frances text-2xl'>Wallet</h2>
            </div>
            <div className='h-[75vh] m-5 w-[75%] bg-[#072419] rounded-2xl'>
                <div className='bg-center bg-cover h-[50%] w-full rounded-t-2xl' style={{ backgroundImage: `url(${Walletpic})` }}>

                </div>

                <div className='bg-[#072419] h-auto rounded-xl m-5 p-7 flex flex-col gap-9'>

                    <div className='flex flex-col gap-2'>
                        <p className='text-xl text-white font-bold'>Bank accounts</p>
                        <p className='text-sm text-white/80'>Add a bank account to make or receive payments.</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <div className='hover:bg-[#0A2E25] p-3'>
                            <p className='text-md text-white/80'>Add a bank account</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Accountwallet
