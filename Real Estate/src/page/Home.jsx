import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='bgimg'>
                <div className='wrapper'>
                    <div className='w-full relative z-10'>
                        <div className='flex-col sm:flex-col md:flex md:flex-row  border pt-24'>
                            <div className=' w-full md:w-[50%] p-5 md:pl-10 md:pt-20 flex flex-col gap-4 h-screen'>
                                <p className='monospace font-mono text-xs tracking-widest uppercase text-[#A6811A]'>EST.1996 — BAHAWALPUR % BEYOND</p>
                                <h1 className='frances text-4xl md:text-6xl font-bold  text-white'>Homes Choosen for how they'll be <span className='text-[#a48d5d]'>lived in,</span>not just listed.</h1>
                                <p className='text-base text-[#c2bfb3]'>We represent a small number of exceptional properties at <br /> a time — each one walked, measured, and vetted by our <br /> own team before it ever reaches a buyer.</p>
                                <div className=' md:flex md:flex-row'>
                                    <button className='bg-black font-bold uppercase text-white p-4'>Browser Listing</button>
                                    <button className='hidden md:block p-4 text-white border uppercase font-bold border-white'>Speak to an agent</button>
                                </div>
                            </div>
                            <div className='hidden sm:hidden md:block   w-[50%]  h-screen'>
                                <div className='flex flex-col gap-6 border-l border-white/25 pl-15 pt-50'>

                                    <div>
                                        <b className='block font-serif text-4xl text-[#C9A868]'>412</b>
                                        <span className='text-sm uppercase tracking-widest text-white/70'>
                                            Properties Placed
                                        </span>
                                    </div>

                                    <div>
                                        <b className='block font-serif text-4xl text-[#C9A868]'>19</b>
                                        <span className='text-sm uppercase tracking-widest text-white/70'>
                                            Years in Practice
                                        </span>
                                    </div>

                                    <div>
                                        <b className='block font-serif text-4xl text-[#C9A868]'>96%</b>
                                        <span className='text-sm uppercase tracking-widest text-white/70'>
                                            Client Referral Rate
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen bg-[#ede8d9]'>

            </div>
        </div>
    )
}

export default Home
