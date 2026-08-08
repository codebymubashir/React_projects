import React from 'react'
import { FaChevronRight, FaApple, FaGoogle } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Login = ({ onClose }) => {
    return (
        <div className='bg-[#07271F] w-[420px] h-auto p-5 rounded-2xl text-white relative'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-[#2FE38A] text-3xl font-bold'>Expensify</p>
                <button className='text-gray-400 hover:text-white text-2xl'>✕</button>
            </div>
            <h2 className='frances text-xl font-medium mb-4'>Welcome! How would you like to connect?</h2>
            <button className='w-full bg-[#0d2e21] hover:bg-[#123a2b] rounded-full py-5 px-6 flex justify-between items-center font-semibold mb-4 transition-all'>
                Email
                <FaChevronRight className='text-[#2FE38A]' />
            </button>
            <button className='w-full bg-[#0d2e21] hover:bg-[#123a2b] rounded-full py-5 px-6 flex justify-between items-center font-semibold mb-8 transition-all'>
                Phone Number
                <FaChevronRight className='text-[#2FE38A]' />
            </button>
            <div className='flex justify-center gap-4 mb-10'>
                <button className='bg-white w-14 h-14 rounded-full flex justify-center items-center hover:scale-105 transition-all'>
                    <FaApple size={24} className='text-black' />
                </button>
                <Link to={"/homes"} ><button className='bg-white w-14 h-14 rounded-full flex justify-center items-center hover:scale-105 transition-all'>
                    <FaGoogle size={24} className='text-[#4285F4]' />
                </button></Link>
            </div>
            <h3 className='frances text-base font-medium mb-2'>Want to talk to our sales team instead?</h3>
            <button className='w-full bg-[#2FE38A] hover:bg-green-400 rounded-full py-3 px-6 flex justify-between items-center font-bold text-black mb-3 transition-all'>
                Contact Sales
                <FaChevronRight />
            </button>
            <p className='text-sm text-gray-400'>
                By logging in, you agree to our{" "}
                <a href="#" className='text-blue-400 hover:underline'>terms of service</a>{" "}
                and{" "}
                <a href="#" className='text-blue-400 hover:underline'>privacy policy</a>.
            </p>

        </div>
    )
}

export default Login