import React from 'react';
import { useOutletContext } from "react-router-dom";
import myImage from "../assets/spendexpens.png";

const Spendreport = () => {
  const { dark } = useOutletContext();

  return (
    <div className={`w-full min-h-screen ${dark ? "bg-[#061b09]" : "bg-white"}`}>
      <h1 className={`frances text-xl p-4 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Report</h1>

      <div className="w-full flex justify-between items-center px-6 py-4">
        <input
          className={`w-64 h-10 border rounded-lg p-2 bg-transparent ${dark ? "text-white" : "text-black"}`}
          type="text"
          placeholder="search for something.."
        />
        <div className={`flex flex-row gap-3 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>
          <button className={`icons font-bold rounded-full border px-5 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
            Display
          </button>
          <button className={`icons font-bold rounded-full border px-5 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
            Save
          </button>
          <button className={`icons font-bold rounded-full border px-5 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
            Filter
          </button>
          <button className={`icons font-bold rounded-full border px-5 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
            +Create
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 max-w-lg mx-auto mt-16 text-center px-6">
        <img
          className="w-72 h-auto object-contain border"
          src={myImage}
          alt="No reports illustration"
        />
        <h2 className={`text-3xl font-bold frances ${dark ? "text-white" : "text-[#0B2E1F]"}`}>
          No reports yet
        </h2>
        <p className={dark ? "text-[#a7b4a8]" : "text-gray-500"}>
          Create a report or take a test drive of Expensify to learn more.
        </p>
        <div className="flex flex-row gap-3 justify-center mt-2">
          <button className="text-white font-bold px-5 py-3 rounded-full bg-[#1a3d32]">
            Take a test drive
          </button>
          <button className="text-white font-bold px-5 py-3 rounded-full bg-[#03d47c]">
            Create reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spendreport;