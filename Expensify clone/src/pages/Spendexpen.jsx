import React from "react";
import Dashboard from "../components/Dashboard";
import Spend from "./Spend";
import myImage from "../assets/spendexpens.png"
const Spendexpen = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#061b09]">
        <h1 className="frances text-white text-xl p-4">Expense</h1>
        <div className="w-full flex justify-between items-center p-4">
          <input
            className="text-white w-65 h-10 border rounded-lg p-2"
            type="text"
            placeholder="search for something.."
          />
          <div className="flex flex-row gap-3 text-white">
            <button className="icons font-bold rounded-4xl border w-20 h-10">
              Display
            </button>
            <button className="icons font-bold rounded-4xl border w-20 h-10">
              Save
            </button>
            <button className="icons font-bold rounded-4xl border w-20 h-10">
              Filter
            </button>
            <button className="icons font-bold rounded-4xl border w-20 h-10">
              +Create
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3  w-[50%] mt-30 ml-80 text-center  h-auto p-10">
            <img className="w-110 h-60 border ml-28" src={myImage} alt="" />
            <h2 className="text-white text-3xl text-center font-bold frances">No expenses yet</h2>
            <p className="text-[#a7b4a8] text-center text-base">Create an expense or take a test drive of Expensify to learn more.</p>
            <div className="flex flex-row gap-3  justify-center">
                <button className="text-white font-bold p-3 rounded-4xl bg-[#1a3d32]">Taka a test drive</button>
                <button className="text-white font-bold p-3 rounded-4xl bg-[#03d47c] ">Create expenses</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Spendexpen;
