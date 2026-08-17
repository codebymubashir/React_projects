import React, { useState } from 'react'
import Transparentbtn from './Transparentbtn'
import iconReceiptScanning from '../assets/icon-receipt-scanning.svg'
import iconExpenseReports from '../assets/icon-expense-reports.svg'
import iconAiExpenses from '../assets/icon-ai-expenses.svg'
import badgeLeader from '../assets/badge-leader.png'
import badgeTopRated from '../assets/badge-top-rated.png'
import badgeShortlist from '../assets/badge-shortlist.png'

const Pagination = ({ dark }) => {

    const data = [
        { icon: iconReceiptScanning, heading: "1. Scan receipts", rules: "Scan receipts via the mobile app, drag-and-drop, forwarding to receipts@expensify.com, or texting 47777." },
        { icon: iconExpenseReports, heading: "2. Submit reports", rules: "Concierge AI automatically categorizes and submits your expenses for reimbursement." },
        { icon: iconAiExpenses, heading: "3. Get reimbursed", rules: "Get paid back directly to your bank account in as little as one business day." },
        { icon: badgeLeader, heading: "1. Set rules", rules: "Set category limits and other expense rules to keep employee spend under control." },
        { icon: badgeTopRated, heading: "2. Approve reports", rules: "Review and approve every expense report, or ask Concierge AI to only flag the outliers." },
        { icon: badgeShortlist, heading: "3. Reimburse employees", rules: "Pay employees back in as little as one business day." },
        { icon: iconReceiptScanning, heading: "1. Set rules", rules: "Set category limits and other expense rules to keep employee spend under control." },
        { icon: iconExpenseReports, heading: "2. Approve reports", rules: "Review and approve every expense report, or ask Concierge AI to only flag the outliers." },
        { icon: iconAiExpenses, heading: "3. Sync accounting", rules: "Automatically code, reconcile, and export expenses via a two-way sync with QuickBooks, Sage Intacct, NetSuite, Xero, and more." },
    ]

    const [page, setPage] = useState(1);
    const itemsperpage = 3;
    const lastindex = itemsperpage * page;
    const firstindex = lastindex - itemsperpage;
    const currentpage = data.slice(firstindex, lastindex);

    return (
        <div className={`homeDiv w-full h-[113vh] pl-15 pr-15 flex flex-col justify-center items-center ${
            dark ? 'bg-[#07271F] text-white' : 'bg-white text-black'
        }`}>
            <div className='w-full h-[25vh] flex justify-center items-center'>
                <p className='text-5xl frances font-semibold'>Try Expensify free for 30 days</p>
            </div>
            <div className='w-full h-[15vh] flex justify-center items-center gap-5 pr-8 pl-8'>
                <button onClick={() => setPage(1)}><Transparentbtn text="Employees" dark={dark} /></button>
                <button onClick={() => setPage(2)}><Transparentbtn text="Business Owners" dark={dark} /></button>
                <button onClick={() => setPage(3)}><Transparentbtn text="Finance/Accounting" dark={dark} /></button>
            </div>
            <div className='w-full h-[50vh] flex justify-center items-center gap-7'>
                {
                    currentpage.map((item, index) => {
                        return <div key={index} className={`w-full h-58 p-7 rounded-lg flex flex-col gap-3 ${
                            dark ? 'text-white bg-[#061B09]' : 'text-black bg-gray-100'
                        }`}>
                            <div><img src={item.icon} alt={item.heading} className='w-9 h-9' /></div>
                            <div><p className='text-lg font-semibold'>{item.heading}</p></div>
                            <div>{item.rules}</div>
                        </div>
                    })
                }
            </div>
            <div className='bg-[#2FE38A] hover:bg-green-400 mr-1 w-auto p-5 h-13 rounded-4xl flex justify-center items-center text-center'>
                <p className='font-semibold'>Get started for free</p>
            </div>
        </div>
    )
}

export default Pagination