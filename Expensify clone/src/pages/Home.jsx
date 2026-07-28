import React from 'react'
import Card from '../components/Card'
import Greenbtn from '../components/Greenbtn'
import { FaStar } from "react-icons/fa";
const Home = () => {
    return (
        <div className='w-full h-[140vh] bg-[#0B2E1F] relative p-10'>
            <svg className="absolute top-5 inset-0 w-full h-full" viewBox="0 0 680 400" preserveAspectRatio="xMidYMid slice">
                <g fill="none" stroke="#15402C" strokeWidth="1.5">
                    <path d="M -20 60 C 100 20, 200 100, 320 60 S 560 20, 700 70" />
                    <path d="M -20 90 C 100 50, 200 130, 320 90 S 560 50, 700 100" />
                    <path d="M -20 120 C 100 80, 200 160, 320 120 S 560 80, 700 130" />
                    <path d="M -20 180 C 120 130, 220 220, 340 180 S 580 130, 700 190" />
                    <path d="M -20 210 C 120 160, 220 250, 340 210 S 580 160, 700 220" />
                    <path d="M -20 240 C 120 190, 220 280, 340 240 S 580 190, 700 250" />
                    <path d="M -20 300 C 140 260, 240 340, 360 300 S 600 260, 700 310" />
                    <path d="M -20 330 C 140 290, 240 370, 360 330 S 600 290, 700 340" />
                </g>
            </svg>
            <div className=' relative text-white border-white flex flex-row h-[110vh]'>
                <div className='border-2 border-white w-[50%] h-[130vh] flex flex-col gap-9'>
                    <p className='font-bold text-3xl'>Expensify</p>
                    <p className='text-5xl frances'>The <span className='text-[#03D47C] frances'>easiest</span> way <br></br> to do your expenses</p>
                    <ul className='flex flex-col gap-5 w-'>
                        <li> <b>✓</b> All inclusive. AI-powered expenses, travel, reimbursements, and corporate cards.</li>
                        <li> <b>✓</b>  Bring your own cards (BYOC). You don't have to switch corporate cards to use Expensify.</li>
                        <li> <b>✓</b> 45+ integrations. QuickBooks, NetSuite, Sage Intacct, Xero, Workday, Gusto, and so much more.</li>
                    </ul>
                    <div className=' w-full h-35 mt-0  border-white'>
                        <p className='w-full  border-white font-bold'>I want too:</p>
                        <div className='w-full h-35 flex flex-row mt-2 gap-4'>
                            <Card title="Organize my own expenses"/>
                            <Card title="Manage expenses for 1-9 employees"/>
                            <Card title="Manage expenses for 10+ employees"/>
                        </div>

                    </div>
                </div>
                <div className='w-[50%] h-[130vh] border-2 border-white'>
                    <Greenbtn/>
                    <div className='w-full h-20  mt-5 p-6 flex flex-row gap-3 '>
                        <img className='w-10 h-7 ml-auto' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_G2.svg" alt="" />
                        <div className='flex flex-row'>
                            <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <p>4,200+ 5-star reviews</p>
                    </div>
                    <div className='w-full h-150 overflow-x-hidden overflow-y-hidden'>
                        <img className='scale-200 relative left-75 top-40' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/hero_screenshot_f1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
