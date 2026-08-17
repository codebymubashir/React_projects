import React from "react";
import Dashboard from "../components/Dashboard";
import { FaReceipt } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Spend = ({ dark }) => {
  return (
    <>
      <div className="flex flex-row">
        <Dashboard dark={dark} />
        <div className={`h-screen ${dark ? "bg-[#061b09]" : "bg-white"}`}>
          <div className={`w-90 h-screen border-2 ${dark ? "border-[#1a3d32]" : "border-gray-200"}`}>
            <h1 className={`frances text-4xl p-4 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Spend</h1>
            <div className="spends w-full h-10 p-2 pl-4">
              <p className={dark ? "text-[#9da99e]" : "text-gray-500"}>Expense Reports</p>
            </div>
            <Link to={"/spend/expense"}>
              <div className="spends w-85 h-12 flex flex-row gap-2 p-3 pl-4 ml-2 rounded-lg">
                <FaReceipt className={`icons w-5 h-5 mt-1 ${dark ? "text-[#8b9c8f]" : "text-gray-500"}`} />
                <p className={`font-bold ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Expense</p>
              </div>
            </Link>
            <Link to={"/spend/report"}>
              <div className="spends w-85 h-12 flex flex-row gap-2 p-3 pl-4 ml-2 rounded-lg">
                <TbReportSearch className={`icons w-5 h-5 mt-1 ${dark ? "text-[#8b9c8f]" : "text-gray-500"}`} />
                <p className={dark ? "text-white" : "text-[#0B2E1F]"}> Reports</p>
              </div>
            </Link>
          </div>
        </div>
        <Outlet context={{ dark }} />
      </div>
    </>
  );
};

export default Spend;