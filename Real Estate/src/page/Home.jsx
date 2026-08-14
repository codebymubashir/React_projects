import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
const Home = () => {

    const [card, setCard] = useState(false)
    return (
        <div>
            <Navbar />
            <div className='bgimg'>
                <div className='wrapper'>
                    <div className='w-full relative z-10'>
                        <div className='page1 flex-col sm:flex-col md:flex md:flex-row  border pt-24'>
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
            <div className='w-full h-auto bg-[#ede8d9] '>
                <div className='hidden sm:hidden md:flex md:flex-row w-[90%] shadow-2xl h-25 ml-15'>
                    <div className='w-[20%] h-25 bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Location</p>
                        <p>Bahawalpur,Modal Town...</p>
                    </div>
                    <div className='w-[20%] h-25  border-l-1 bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Property Type</p>
                        <select className='w-full' name="" id="">
                            <option value="">Any Type</option>
                            <option value="">Villa</option>
                            <option value="">House</option>
                            <option value="">Appartment</option>
                            <option value="">Plot</option>
                        </select>
                    </div>
                    <div className='w-[20%] h-25 border-l-1 bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Budget</p>
                        <select className='w-full' name="" id="">
                            <option value="">Any Budget</option>
                            <option value="">Under 50 lakh</option>
                            <option value="">50 lakh - 1crore</option>
                            <option value="">1crore +</option>
                        </select>
                    </div>
                    <div className='w-[20%] h-25 border-l-1  bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Bedrooms</p>
                        <select className='w-full' name="" id="">
                            <option value="">Any</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                            <option value="">3+</option>
                            <option value="">4+</option>
                        </select>
                    </div>
                    <div className=' w-[20%] h-25  bg-white '>
                        <button className='searchbtn bg-black text-white font-bold w-full h-full text-xl'>Search</button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-4 pt-15 md:mt-25 md:justify-between md:flex md:flex-row md:gap-5'>
                    <div className='text-center md:text-left md:w-[50%] md:ml-10 md:mb-4'>
                        <p className='text-[#C9A868] text-base'>Feature</p>
                        <h1 className='frances text-4xl md:text-5xl'>Currently Representing</h1>
                    </div>
                    <div className=' text-center md:text-left  md:w-[25%] md:text-base  md:mt-3 md:mr-15'>
                        <p className='text-sm'>A short rotation of homes we're proud to have walked ourselves — updated weekly, never bulk-imported.</p>
                    </div>
                </div>
                <div className="flex flex-col pl-5 md:grid md:grid-cols-3 gap-2 md:pl-10 pt-15 px-8">
                    <Products image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop" title="The Cantt Residence" subtitle="Model Town Bahawalpur" btn1="4 Beds" btn2="3 Baths" btn3="10 Marla" />
                    <Products image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop" title="Vane Court Apartments" subtitle="Satellite Town, Bahawalpur" btn1="2 Beds" btn2="2 Baths" btn3="10 Marla" />
                    <Products image="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=900&auto=format&fit=crop" title="Aldergate Corner Plot" subtitle="DHA Phase 2, Bahawalpur" btn1="4 Beds" btn2="2 Baths" btn3="10 Marla" />
                </div>

                {card && (
                    <div className="hidden  md:grid grid-cols-3 gap-2 pl-10 pt-15 px-8">
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ULRWj0k1wa4K8BKr0KE8aRjdJAwtYpQcQ8CwE1ErgA&s=10" title="PentHouse Appartment" subtitle="Model Town B Bahawalpur" btn1="6 Beds" btn2="6 Baths" btn3="20 Marla" />
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXuWqerxOUoQtWeUuruPjiqOcapMwjYO5P1WxmbfbtJKP1DXmOWL-mec&s=10" title="Vane Apartments" subtitle="Hafiz Town, Bahawalpur" btn1="4 Beds" btn2="2 Baths" btn3="15 Marla" />
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMyBOITfuw1HKgTBzkpVPCZ1wbZjmi4Exsvrpuw5yAjipcvMhFXRB0Q4&s=10" title="Solo Bed Appartment" subtitle="DHA Phase 3, Bahawalpur" btn1="1 Bed" btn2="1 Bath" btn3="10 Marla" />
                    </div>
                )}
                <div className='hidden md:w-full h-auto md:flex justify-center pt-15'>
                    <button onClick={() => setCard(!card)} className='border p-4 font-bold text-black text-base'>{card ? "Hide Others" : "See All Others"}</button>
                </div>
                <div className='w-full h-35'></div>
            </div>




            <div className='w-full h-auto pl-5 pt-10 flex flex-col md:flex md:flex-row md:pl-0   md:w-[93%] md:h-screen md:ml-10 '>
                <div className='aboutimg w-70 h-[70vh] md:w-[50%] md:h-[90vh] md:ml-8 relative'>
                    <div className='hidden md:block w-65 h-40 p-10 absolute  top-110 right-85 bg-[#C9A868]  '>
                        <p className='frances text-4xl font-bold '>412</p>
                        <p>Homes placed since <br /> 2002</p>
                    </div>
                </div>
                <div className='w-70 h-[70vh] p-2 flex flex-col gap-2 md:w-[50%] md:h-[90vh] md:p-8'>
                    <p className='text-base text-[#C9A868] font-bold md:text-xl md:pt-25  '>Our Story</p>
                    <h2 className='frances text-xl font-bold md:text-2xl '>Started as a two-desk office on Circular Road</h2>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Aldergate & Vane was founded in 2007 by two friends who thought Bahawalpur's property market deserved agents who actually visited what they sold. Nineteen years later, that's still the rule: nobody on our team lists a property they haven't walked themselves.</p>
                        <p className='hidden md:block '>We stayed intentionally small. Where larger agencies chase volume, we cap our active listings so every client — buyer or seller — gets a team that knows their file by name, not by number.</p>
                    </div>
                    <button className='searchbtn text-base font-bold p-4 bg-black text-white mt-4'>Get In Touch</button>
                </div>

            </div>






            <div className='w-full h-auto md:w-full md:h-70 md:mt-20  border-2 border-black bg-orange-900 '>
                <h2>Thinking about buying, selling, or just curious what your home is worth?</h2>
                <p>Thinking about buying, selling, or just curious what your home is worth?</p>
                <button>Start the Conversation</button>

            </div>
            
        </div>
    )
}

export default Home
