import React from 'react'

const Footer = ({ dark }) => {
    return (
        <div className={`w-full h-[150vh] ${dark ? 'bg-[#061b09]' : 'bg-white'}`}>
            <div className='w-full h-115'>
                <div className='flex flex-row justify-around pt-18'>
                    <ul className={`flex flex-col gap-3 ${dark ? 'text-white' : 'text-black'}`}>
                        <a href=""><li className='text-[#03d47c] font-bold'>Features</li></a>
                        <a href=""><li>Expense Management</li></a>
                        <a href=""><li>Spend Management</li></a>
                        <a href=""><li>Expense Reports</li></a>
                        <a href=""><li>Company Credit Card</li></a>
                        <a href=""><li>Receipt Scanning</li></a>
                        <a href=""><li>Bill Pay</li></a>
                        <a href=""><li>Invoicing</li></a>
                        <a href=""><li>Payroll</li></a>
                        <a href=""><li>Travel</li></a>
                    </ul>
                    <ul className={`flex flex-col gap-3 ${dark ? 'text-white' : 'text-black'}`}>
                        <a href=""><li className='text-[#03d47c] font-bold'>Resources</li></a>
                        <a href=""><li>Expensify Aproved</li></a>
                        <a href=""><li>Press Kit</li></a>
                        <a href=""><li>Support</li></a>
                        <a href=""><li>Expensify Help</li></a>
                        <a href=""><li>Terms of Service</li></a>
                        <a href=""><li>Privacy</li></a>
                    </ul>
                    <ul className={`flex flex-col gap-3 ${dark ? 'text-white' : 'text-black'}`}>
                        <a href=""><li className='text-[#03d47c] font-bold'>Learn More</li></a>
                        <a href=""><li>About Expensify</li></a>
                        <a href=""><li>Blog</li></a>
                        <a href=""><li>Jobs</li></a>
                        <a href=""><li>Expensify.org</li></a>
                        <a href=""><li>Investors Relators</li></a>
                    </ul>
                    <ul className={`flex flex-col gap-3 ${dark ? 'text-white' : 'text-black'}`}>
                        <a href=""><li className='text-[#03d47c] font-bold'>Get Started</li></a>
                        <a href=""><li>Create a new account</li></a>
                        <a href=""><li>Login</li></a>
                        <a href=""><li className='text-sm text-gray-500'>@2008-2026 Expensify.inc</li></a>
                    </ul>
                </div>

            </div>
            <div className={`w-full h-40 flex flex-col p-8 gap-3 opacity-90 ${dark ? 'text-white' : 'text-black'}`}>
                <p className='text-xs'>
                    The Expensify Visa® Commercial Card is issued by The Bancorp Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and may not be used at all merchants that accept Visa cards. Apple® and the Apple logo® are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</p>

                <p className='text-xs'>Cards provided to EEA residents are issued by Transact Payments Malta Limited and cards provided to UK residents are issued by Transact Payments Limited pursuant to license by Visa Europe Limited. Transact Payments Malta Limited is duly authorized and regulated by the Malta Financial Services Authority as a Financial Institution under the Financial Institution Act 1994. Registration number C 91879. Transact Payments Limited is authorized and regulated by the Gibraltar Financial Service Commission.</p>

                <p className='text-xs'>Money transmission services are provided by our partners, which includes Expensify Payments LLC (NMLS ID: 2017010), pursuant to its licenses. See the Terms of Service for more information.
                </p>

            </div>
            <div className={`w-full h-75 overflow-hidden py-8 pl-8 pr-8 ${dark ? 'bg-black' : 'bg-gray-100'}`}>
                <h1 className='text-[#03d47c] font-bold text-[22vw] leading-none tracking-tight whitespace-nowrap -ml-2'>
                    Expensify
                </h1>

            </div>

        </div>
    )
}

export default Footer