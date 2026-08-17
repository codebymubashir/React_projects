import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { BsLightningChargeFill } from "react-icons/bs";
import myImage from "../../../assets/spendexpens.png";

const Accountrules = () => {
    const { dark } = useOutletContext();

    return (
        <>
            <div className={`w-full h-15 ${dark ? 'text-white' : 'text-[#0B2E1F]'} flex flex-row gap-2 p-2 pl-4`}>
                <BsLightningChargeFill size={40} className='text-yellow-400'/>
                <h2 className='frances text-2xl'>Expense Rules</h2>
            </div>
            <div>
                <p className={`${dark ? 'text-[#a5bbaf]' : 'text-gray-500'} mt-4 ml-8`}>This rules apply to your expense.</p>
            </div>
            <div className="flex flex-col items-center gap-3 max-w-lg mx-auto mt-16 text-center px-6">
                    <img
                      className="w-72 h-auto object-contain border"
                      src={myImage}
                      alt="No reports illustration"
                    />
                    <h2 className={`text-3xl font-bold frances ${dark ? 'text-white' : 'text-[#0B2E1F]'}`}>
                      No rules yet
                    </h2>
                    <p className={`text-base ${dark ? 'text-[#a7b4a8]' : 'text-gray-500'}`}>
                      Add a rule to automate expense reporting.
                    </p>
                    <div className="flex flex-row gap-3 justify-center mt-2">
                      <button className="text-white font-bold px-5 py-3 rounded-full bg-[#03d47c]">
                        Add Rule
                      </button>
                    </div>
                  </div>
        </>
    )
}

export default Accountrules