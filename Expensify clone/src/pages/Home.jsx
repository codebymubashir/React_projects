import React, { useState } from 'react'
import Card from '../components/Card'
import Greenbtn from '../components/Greenbtn'
import { FaStar, FaGithub, FaPinterest } from "react-icons/fa";
import Featurcard from '../components/Featurcard';
import Reviewscard from '../components/Reviewscard';
import Expencardz from '../components/Expencardz';
import Bgcards from '../components/Bgcards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Faq from '../components/Faq';
const Home = () => {


    const [open,setOpen] = useState(false)

    return (
        <>

        
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
                <div className=' relative text-white flex flex-row h-[110vh]'>
                    <div className=' w-[50%] h-[130vh] flex flex-col gap-9'>
                        <p className='font-bold text-3xl'>Expensify</p>
                        <p className='text-5xl frances'>The <span className='text-[#03D47C] frances'>easiest</span> way <br></br> to do your expenses</p>
                        <ul className='flex flex-col gap-5 w-'>
                            <li> <b>✓</b> All inclusive. AI-powered expenses, travel, reimbursements, and corporate cards.</li>
                            <li> <b>✓</b>  Bring your own cards (BYOC). You don't have to switch corporate cards to use Expensify.</li>
                            <li> <b>✓</b> 45+ integrations. QuickBooks, NetSuite, Sage Intacct, Xero, Workday, Gusto, and so much more.</li>
                        </ul>
                        <div className=' w-full h-35 mt-0 '>
                            <p className='w-full  font-bold'>I want too:</p>
                            <div className='w-full h-35 flex flex-row mt-2 gap-4'>
                                <Card title="Organize my own expenses" />
                                <Card title="Manage expenses for 1-9 employees" />
                                <Card title="Manage expenses for 10+ employees" />
                            </div>

                        </div>
                        <div className='w-full h-25 relative justify-center items-center p-4'>
                            <input className='w-140 h-15 rounded-4xl ml-[-1rem] bg-white text-black pl-4' type="text" placeholder='Enter your Email or Phone Number' />
                            <button className='absolute top-5 right-9 bg-[#03D47C] w-58 h-13 rounded-4xl ml-122 font-bold'>Get Started For Free</button>
                        </div>
                        <div className='w-full h-15  flex flex-row gap-3'>
                            <p className='text-base'>Or Get Started with</p>
                            <img className='bg-white w-7 h-7 rounded-4xl p-1' src="https://d2k5nsl2zxldvw.cloudfront.net/images/icons/sign-in/google.svg" alt="" />

                        </div>
                    </div>
                    <div className='w-[50%] h-[130vh]'>
                        <Link to={"/homes"} ><Greenbtn /></Link>
                        <div className='w-full h-20  mt-5 p-6 flex flex-row gap-3 '>
                            <img className='w-10 h-7 ml-auto' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_G2.svg" alt="" />
                            <div className='flex flex-row text-yellow-400'>
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



            <div className='w-full h-60 bg-[#085239]'>
                <div className='w-full h-20'>
                    <p className='frances text-white text-3xl text-center p-4'>Join 15 million+ members who trust Expensify</p>
                </div>
                <div class="w-full bg-[#085239] py-16">
                    

                    <div class="overflow-hidden whitespace-nowrap">
                        <div class="inline-flex animate-marquee">
                            
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_xero.svg" alt="Xero" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_tribeca.svg" alt="Tribeca Film Festival" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_pinterest.svg" alt="Pinterest" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_warby.svg" alt="Warby Parker" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_swatch.svg" alt="Swatch" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_brooklynnets.svg" alt="Brooklyn Nets" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_uk.svg" alt="University of Kentucky" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_github.svg" alt="GitHub" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_xero.svg" alt="Xero" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_tribeca.svg" alt="Tribeca Film Festival" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_pinterest.svg" alt="Pinterest" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_warby.svg" alt="Warby Parker" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_swatch.svg" alt="Swatch" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_brooklynnets.svg" alt="Brooklyn Nets" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_uk.svg" alt="University of Kentucky" class="h-10 mx-16 inline-block" />
                            <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_github.svg" alt="GitHub" class="h-10 mx-16 inline-block" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex flex-col gap-5 bg-[#061b09]'>
                <p className='frances text-white text-4xl text-center p-20'>Features</p>
                <div className="grid grid-cols-3 gap-2 pl-15 px-8">
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__money-receipt.svg" title="Expense management" des="Automatically create, submit, approve, and reimburse expenses. Reports automatically sync with accounting." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__luggage.svg" title="Travel" des="Book flights, hotels, cars, and rail right in the app. Every booking syncs with your expenses for total T&E." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__handcard.svg" title="Expensify Card" des="The Expensify Visa® Commercial Card earns cash back on US purchases and lowers your Expensify bill." btn="Learn More" />
                </div>
                <div className="grid grid-cols-3 gap-2 pl-15 px-8">
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__smartscan.svg" title="Receipt scanning" des="Snap a photo, forward to receipts@expensify.com, or upload a file – we’ll scan the details!" btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__vertical-credit-cards.svg" title="Bring your own cards (BYOC)" des="Link the corporate cards you already have for automatic reconciliation. 10k+ banks supported globally." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__earth.svg" title="Global reimbursements" des="Reimburse employees or independent contractors anywhere in the world, in their local currency." btn="Learn More" />

                </div>
                <div className="grid grid-cols-3 gap-2 pl-15 px-8">
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__virtualcard.svg" title="Virtual cards" des="Instantly issue unlimited virtual cards for employees, vendors, or projects. Free with every Expensify Card." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__report-receipt.svg" title="Expense reports" des="Submit, review, and approve expenses in seconds. Expensify handles the matching and policy checks." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__concierge-bot.svg" title="Al-powered expenses" des="Automate expense categorization, flag policy violations, enforce rules, and reduce manual errors with Expensify's Concierge Al." btn="Learn More" />

                </div>

                {open && (
                    <>
                    <div className="grid grid-cols-3 gap-2 pl-15 px-8">
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__piggybank.svg" title="Track expenses" des="Capture and categorize receipts, card transactions, mileage, and more for tax purposes." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__mobileapp.svg" title="Mobile app" des="Manage expenses, cards, and travel on the go. All functionality included." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__commentbubbles.svg" title="Chat" des="Chat directly on every expense to clear up any questions or confusion in realtime." btn="Learn More" />
                </div>
                <div className="grid grid-cols-3 gap-2 pl-15 px-8">
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__coins.svg" title="Spend management" des="Control company spend with smart limits, approvals, and visibility across every card and expense." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__chart.svg" title="Financial reporting" des="Build tailored reports to analyze spend, identify trends, and support smarter business decisions." btn="Learn More" />
                    <Featurcard image="https://d2k5nsl2zxldvw.cloudfront.net/images/illustrations/simple-illustration__moneyintowallet.svg" title="Budgets" des="Set, track, and manage budgets across teams and departments. Control spend before it happens." btn="Learn More" />

                </div>
                    </>
                )}
                
                <div className='w-full justify-center px-140 items-center'>
                    <button onClick={()=>setOpen(!open)} className='bg-[#1a3d32] w-35 h-15  rounded-4xl text-white font-bold text-base text-center'>{open ? "Less Features": "All Features"}</button>
                </div>
                
            </div>
           


            <div className='w-full h-screen border border-black bg-[#061b09]'>
                <div className='w-full h-120 mt-8 pl-18 grid grid-cols-3 gap-3'>
                    <Bgcards cta="Read More" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/case-studies/image-pivotbio.jpg" logo=" AVIV" highlight1="Rolled out" highlight2="company-wide card, travel, and expense"/>

                    <Bgcards cta="Read More" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/case-studies/image-roadtrippers.jpg" logo="PIVOT BIO" highlight1="Funded their entire T&E program" highlight2="with Expensify Card cash back"/>

                    <Bgcards cta="Read More" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/case-studies/image-philzcoffee.jpg" logo="REDMOND" highlight2="Achieved 50% faster" highlight1="client reimbursements"/>

                </div>

            </div>

            <Pagination/>

            <div className='w-full h-[120vh]  bg-[#1a3d32]'>
                <div className='w-full h-35  p-12'>
                    <h2 className='frances text-4xl text-white text-center'>Highly rated, easy to use</h2>
                </div>
                <div className='w-full h-100  pl-20 grid grid-cols-3'>
                    <Reviewscard title="“The easiest expense tool I've ever used.”" des="“It is very very easy, as soon as you get a receipt you can scan it, the AI will capture all relevant information and it is very little interaction to get to the final sumbmission of the expense. It is so easy!!!”" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/author_luis.png" heading="Luis F." />
                    <Reviewscard title="“Great Program!”" des="“Expensify has a great UI interface and is very intuitive to use. I particularly like the funcitonality of taking a picture of a receipt and having it uploaded to my account. I also like that I can send an email and the smart-scanner puts it into my expenses.”" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/author_weston.png" heading="Weston M." />
                    <Reviewscard title="“Simple, Straight-forward Expenses!”" des="“I've never met someone that enjoys doing their expenses. Following business trips or even a few weeks in the office, the last thing that someone wants to do is take time out of their day/week" image="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/author_christy.png" heading="Kirsten H." />

                </div>
                <div className='w-full h-44 flex flex-row'>
                    <div className='w-full h-20  mt-5 ml-28 p-6 flex flex-row gap-3 '>
                        <img className='w-10 h-7' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/logo_G2.svg" alt="" />
                        <div className='flex flex-row text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className='text-white'>4,200+ 5-star reviews</p>
                    </div>
                    <div className='flex flex-row mt-5 p-6 mr-38 gap-6 '>
                        <img className='w-15 h-15' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/badge_g2.svg" alt="" />
                        <img className='w-15 h-15' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/badge_tr.svg" alt="" />
                        <img className='w-15 h-15' src="https://d2k5nsl2zxldvw.cloudfront.net/images/homepage/2024/badge_capterra.svg" alt="" />
                    </div>
                </div>
            </div>


            <div className='logoimg w-full h-screen'></div>
            <div className='w-full h-85 bg-[#1a3d32] flex flex-row'>
                <div className='w-[50%] h-85 text-white flex flex-col gap-4 p-12'>
                    <h2 className='frances text-4xl mt-4 '>Ready to simplify your receipt and expense management process?</h2>
                    <p className='text-based'>Enter your email or phone number to make your company's money go further with Expensify's time-saving spend management too</p>
                </div>
                <div className='w-[50%] h-85  text-white pt-20'>
                    <div className='w-full h-25 relative justify-center items-center p-4'>
                        <input className='w-140 h-15 rounded-4xl ml-[-1rem] bg-white text-black pl-4' type="text" placeholder='Enter your Email or Phone Number' />
                        <button className='absolute top-5 right-19 bg-[#03D47C] w-58 h-13 rounded-4xl ml-122 font-bold'>Get Started For Free</button>
                    </div>
                    <div className='w-full h-15  flex flex-row gap-3'>
                        <p className='text-base'>Or Get Started with</p>
                        <img className='bg-white w-7 h-7 rounded-4xl p-1' src="https://d2k5nsl2zxldvw.cloudfront.net/images/icons/sign-in/google.svg" alt="" />

                    </div>
                </div>

            </div>
            <Faq/>

            <Footer/>
        </>

    )
}

export default Home
