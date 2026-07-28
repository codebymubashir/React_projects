import React from 'react'
import Card from '../components/Card'

const Home = () => {


    let card = [
        {
            title: "shoes",
            dis: "thksafj "
        },
        {
            title: "shoes",
            dis: "thksafj "
        },
        {
            title: "shoes",
            dis: "thksafj "
        },
        {
            title: "shoes",
            dis: "thksafj "
        },
    ]




    return (
        <div>
            <div className="w-full h-85 p-5  flex flex-col gap-4 md:justify-center md:items-center">
                <h1 className="text-5xl font-bold md:text-7xl">Build Something <span className="text-blue-600">Amazing</span> </h1>
                <p className="text-base text-gray-500">A simple, clean starting point for your next React project. Fast, responsive, and easy to customize</p>
                <div className="flex flex-row gap-5">
                    <button className="border-2  w-25 h-11 bg-blue-600 text-white rounded-md">Get Started</button>
                    <button className="border  w-25 h-11 bg-white text-black border-black rounded-md">Learn More</button>
                </div>

            </div>

            <div className='h-screen bg-gray-300'>
               



            </div>

            {card.map((item)=>(
               <Card title={item.title}  dis={item.dis}  />
            ))}

        </div>
    )
}

export default Home
