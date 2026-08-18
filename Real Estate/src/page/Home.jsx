import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Workers from '../components/Workers'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Home = () => {

    const [card, setCard] = useState(false)

    const reviewsData = [
        {
            img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
            des: "They turned down two properties on our behalf before showing us the one we bought. That restraint is rare.",
            name: "Hassan Raza",
            subname: "Bought, Model Town",
        },
        {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
            des: "Sold our plot in eleven days at a price we didn't think was possible. Communication the whole way through.",
            name: "Ayesha Farooq",
            subname: "Sold, DHA Phase 2",
        },
        {
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
            des: "As first-time buyers we needed someone patient. They never rushed the process, even when.",
            name: "Bilal Ahmed",
            subname: "Bought, Satellite Town",
        },
        {
            img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
            des: "Transparent about issues most agents would've hidden — a cracked boundary wall, a slow water table.",
            name: "Sana Malik",
            subname: "Bought, Cantt Area",
        },
        {
            img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop",
            des: "We viewed twelve houses with three different agencies before them. They found what we wanted in two.",
            name: "Faisal Nadeem",
            subname: "Bought, Shah Rukn-e-Alam",
        },
        {
            img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
            des: "Negotiated three lakh off the asking price without us even asking. Didn't expect that kind of advocacy.",
            name: "Mariam Sheikh",
            subname: "Bought, Yasirabad",
        },
        {
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
            des: "Our plot had a boundary dispute pending for years. They sorted the paperwork before listing it — most agents wouldn't bother.",
            name: "Kamran Sultan",
            subname: "Sold, Baghdad-ul-Jadeed",
        },
    ];
    const [page, setPage] = useState(1)


    const itemsperpage = 3;
    const lastindex = itemsperpage * page;
    const firstindex = lastindex - itemsperpage
    const currentpage = reviewsData.slice(firstindex, lastindex)

    return (
        <div>
            <Navbar />
            <div className='bgimg'>
                <div className='wrapper'>
                    <div className='w-full relative z-10'>
                        <div className='page1 flex flex-col md:flex-row border pt-24'>
                            <div className='w-full md:w-[50%] p-5 md:pl-10 md:pt-20 flex flex-col gap-4 md:h-screen'>
                                <p className='monospace font-mono text-xs tracking-widest uppercase text-[#A6811A]'>EST.1996 — BAHAWALPUR % BEYOND</p>
                                <h1 className='frances text-3xl sm:text-4xl md:text-6xl font-bold text-white'>Homes Choosen for how they'll be <span className='text-[#a48d5d]'>lived in,</span> not just listed.</h1>
                                <p className='text-sm sm:text-base text-[#c2bfb3]'>We represent a small number of exceptional properties at a time — each one walked, measured, and vetted by our own team before it ever reaches a buyer.</p>
                                <div className='flex flex-col sm:flex-row gap-2'>
                                  <Link to={"/journal"}> <button className='bg-black font-bold uppercase text-white p-4 hover:bg-[#A6811A]'>Browser Listing</button></Link> 
                                   <Link to={"/contact"}> <button className='hidden md:block p-4 text-white border uppercase font-bold border-white'>Speak to an agent</button></Link>
                                </div>
                            </div>
                            <div className='hidden md:block w-[50%] h-screen'>
                                <div className='flex flex-col gap-6 border-l border-white/25 pl-10 pt-32'>

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
            <div className='w-full h-auto bg-[#ede8d9]'>
                <div className='hidden md:flex md:flex-row w-[90%] shadow-2xl h-25 ml-15'>
                    <div className='w-[20%] h-25 bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Location</p>
                        <p>Bahawalpur,Modal Town...</p>
                    </div>
                    <div className='w-[20%] h-25 border-l-1 bg-white p-4'>
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
                    <div className='w-[20%] h-25 border-l-1 bg-white p-4'>
                        <p className='frances text-[#a48d5d]'>Bedrooms</p>
                        <select className='w-full' name="" id="">
                            <option value="">Any</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                            <option value="">3+</option>
                            <option value="">4+</option>
                        </select>
                    </div>
                    <div className='w-[20%] h-25 bg-white'>
                        <button className='searchbtn bg-black text-white font-bold w-full h-full text-xl'>Search</button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-4 pt-15 md:mt-25 md:justify-between md:flex md:flex-row md:gap-5'>
                    <div className='text-center md:text-left md:w-[50%] md:ml-10 md:mb-4'>
                        <p className='text-[#C9A868] text-base'>Feature</p>
                        <h1 className='frances text-4xl md:text-5xl'>Currently Representing</h1>
                    </div>
                    <div className='text-center md:text-left md:w-[25%] md:text-base md:mt-3 md:mr-15'>
                        <p className='text-sm text-center '>A short rotation of homes we're proud to have walked ourselves — updated weekly, never bulk-imported.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center px-5 md:grid md:grid-cols-3 gap-4 md:gap-2 md:pl-10 pt-15 md:px-8">
                    <Products image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop" title="The Cantt Residence" subtitle="Model Town Bahawalpur" btn1="4 Beds" btn2="3 Baths" btn3="10 Marla" />
                    <Products image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop" title="Vane Court Apartments" subtitle="Satellite Town, Bahawalpur" btn1="2 Beds" btn2="2 Baths" btn3="10 Marla" />
                    <Products image="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=900&auto=format&fit=crop" title="Aldergate Corner Plot" subtitle="DHA Phase 2, Bahawalpur" btn1="4 Beds" btn2="2 Baths" btn3="10 Marla" />
                </div>

                {card && (
                    <div className="hidden md:grid grid-cols-3 gap-2 pl-10 pt-15 px-8">
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ULRWj0k1wa4K8BKr0KE8aRjdJAwtYpQcQ8CwE1ErgA&s=10" title="PentHouse Appartment" subtitle="Model Town B Bahawalpur" btn1="6 Beds" btn2="6 Baths" btn3="20 Marla" />
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXuWqerxOUoQtWeUuruPjiqOcapMwjYO5P1WxmbfbtJKP1DXmOWL-mec&s=10" title="Vane Apartments" subtitle="Hafiz Town, Bahawalpur" btn1="4 Beds" btn2="2 Baths" btn3="15 Marla" />
                        <Products image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMyBOITfuw1HKgTBzkpVPCZ1wbZjmi4Exsvrpuw5yAjipcvMhFXRB0Q4&s=10" title="Solo Bed Appartment" subtitle="DHA Phase 3, Bahawalpur" btn1="1 Bed" btn2="1 Bath" btn3="10 Marla" />
                    </div>
                )}
                <div className='w-full h-auto flex justify-center pt-15'>
                    <button onClick={() => setCard(!card)} className='border p-4 font-bold text-black text-base'>{card ? "Hide Others" : "See All Others"}</button>
                </div>
                <div className='w-full h-35'></div>
            </div>




            <div id='about' className='w-full h-auto px-5 pt-10 flex flex-col md:flex-row md:px-0 md:w-[93%] md:h-screen md:ml-10'>
                <div className='aboutimg w-full h-[45vh] md:w-[50%] md:h-[90vh] md:ml-8 relative'>
                    <div className='hidden md:block w-65 h-40 p-10 absolute top-110 right-85 bg-[#C9A868]'>
                        <p className='frances text-4xl font-bold'>412</p>
                        <p>Homes placed since <br /> 2002</p>
                    </div>
                </div>
                <div className='w-full h-auto p-2 flex flex-col gap-2 md:w-[50%] md:h-[90vh] md:p-8'>
                    <p className='text-base text-[#C9A868] font-bold md:text-xl md:pt-25'>Our Story</p>
                    <h2 className='frances text-xl font-bold md:text-2xl'>Started as a two-desk office on Circular Road</h2>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm'>Aldergate & Vane was founded in 2007 by two friends who thought Bahawalpur's property market deserved agents who actually visited what they sold. Nineteen years later, that's still the rule: nobody on our team lists a property they haven't walked themselves.</p>
                        <p className='hidden md:block'>We stayed intentionally small. Where larger agencies chase volume, we cap our active listings so every client — buyer or seller — gets a team that knows their file by name, not by number.</p>
                    </div>
                  <Link to={"/contact"}> <button className='searchbtn w-full text-base font-bold p-4 bg-black text-white mt-4'>Get In Touch</button></Link> 
                </div>

            </div>

            <div className='w-full h-auto flex flex-col gap-4 pt-15 md:pt-0 md:mt-25 md:justify-between md:flex md:flex-row md:gap-5'>
                <div className='text-center md:text-left md:w-[50%] md:ml-10 md:mb-4'>
                    <p className='text-[#C9A868] text-base'>The Team</p>
                    <h1 className='frances text-4xl md:text-5xl'>People, not a call centre</h1>
                </div>
                <div className='text-center px-5 md:text-left md:w-[25%] md:text-base md:mt-5 md:mr-15'>
                    <p className='text-sm'>Every agent below handles their own clients start to finish.</p>
                </div>

            </div>
            <div className='w-full h-auto p-6 md:h-screen md:p-10 md:pt-15'>
                <div className='flex flex-col gap-4 md:flex-row md:gap-4'>
                    <Workers img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" name="Imran Sheikh" position="Founding Partner" />
                    <Workers img="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop" name="Mahnoor Iqbal" position="Senior Agent, Residential" />
                    <Workers img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop" name="Usman Tariq" position="Land & Plots Specialist" />
                    <Workers img="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop" name="Zara Khan" position="Client Relations Lead" />
                </div>
            </div>

            <div className="w-full overflow-hidden leading-[0]">
                <svg
                    className="w-full h-[80px] md:h-[120px] block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#12231C"
                        d="M0,288L15,245.3C30,203,60,117,90,122.7C120,128,150,224,180,234.7C210,245,240,171,270,133.3C300,96,330,96,360,85.3C390,75,420,53,450,53.3C480,53,510,75,540,106.7C570,139,600,181,630,181.3C660,181,690,139,720,122.7C750,107,780,117,810,138.7C840,160,870,192,900,170.7C930,149,960,75,990,80C1020,85,1050,171,1080,197.3C1110,224,1140,192,1170,186.7C1200,181,1230,203,1260,186.7C1290,171,1320,117,1350,112C1380,107,1410,149,1425,170.7L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
                    />
                </svg>
            </div>
            <div id='reviews' className='w-full h-auto md:h-[105vh] pt-8 md:pt-15 bg-[#12231C]'>
                <div className='text-center px-5 md:px-0 md:text-left md:w-[50%] md:ml-10 md:mb-4'>
                    <p className='text-[#C9A868] text-base'>Client Notes</p>
                    <h2 className='frances text-3xl sm:text-4xl text-white md:text-5xl'>What it's like to work with us</h2>
                </div>
                <div className='flex flex-col items-center gap-4 px-4 sm:px-6 md:flex-row md:flex-wrap md:justify-center md:gap-6 lg:gap-8'>
                    {currentpage.map((review, index) => (
                        <Reviews
                            key={index}
                            des={review.des}
                            img={review.img}
                            name={review.name}
                            subname={review.subname}
                        />
                    ))}
                </div>
                <div className='flex flex-row gap-2 pb-8 mt-10 justify-center'>
                    <button onClick={() => setPage(1)} className='p-2 rounded-4xl bg-transparent border text-white border-white'><FaChevronLeft /></button>
                    <button onClick={() => setPage(2)} className='p-2 rounded-4xl bg-transparent border text-white border-white'><FaChevronRight /></button>
                </div>
            </div>

            <div className='w-full h-auto md:mt-20 flex flex-col gap-4 p-6 text-center md:p-20 md:px-50 border-2 border-black bg-orange-900'>
                <h2 className='frances text-white text-2xl sm:text-3xl md:text-5xl'>Thinking about buying, selling, or just curious what your home is worth?</h2>
                <p className='text-gray-300 text-sm'>A conversation costs nothing and commits you to nothing.</p>
               <Link to={"/contact"}><button className='redsecbtn border border-white p-4 w-full md:w-60 md:mx-auto md:mt-5 text-center font-bold text-white bg-transparent'>Start the Conversation</button></Link> 

            </div>

            <Footer />

        </div>
    )
}

export default Home