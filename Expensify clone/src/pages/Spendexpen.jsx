import React from "react";
import Dashboard from "../components/Dashboard";
import Spend from "./Spend";
import myImage from "../assets/spendexpens.png";

const Spendexpen = () => {
  return (
    <div className="w-full min-h-screen bg-[#061b09]">
      <h1 className="frances text-white text-xl p-4">Expense</h1>

      <div className="w-full flex justify-between items-center px-6 py-4">
        <input
          className="text-white w-64 h-10 border rounded-lg p-2 bg-transparent"
          type="text"
          placeholder="search for something.."
        />
        <div className="flex flex-row gap-3 text-white">
          <button className="icons font-bold rounded-full border px-5 h-10">
            Display
          </button>
          <button className="icons font-bold rounded-full border px-5 h-10">
            Save
          </button>
          <button className="icons font-bold rounded-full border px-5 h-10">
            Filter
          </button>
          <button className="icons font-bold rounded-full border px-5 h-10">
            +Create
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 max-w-lg mx-auto mt-16 text-center px-6">
        <img
          className="w-72 h-auto object-contain border"
          src={myImage}
          alt="No expenses illustration"
        />
        <h2 className="text-white text-3xl font-bold frances">
          No expenses yet
        </h2>
        <p className="text-[#a7b4a8] text-base">
          Create an expense or take a test drive of Expensify to learn more.
        </p>
        <div className="flex flex-row gap-3 justify-center mt-2">
          <button className="text-white font-bold px-5 py-3 rounded-full bg-[#1a3d32]">
            Take a test drive
          </button>
          <button className="text-white font-bold px-5 py-3 rounded-full bg-[#03d47c]">
            Create expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spendexpen;