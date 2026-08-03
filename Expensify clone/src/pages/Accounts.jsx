import React from "react";
import Dashboard from "../components/Dashboard";
const Accounts = () => {
  return (
    <>
      <div className="flex flex-row">
        <Dashboard />
        <div className="w-full h-screen  bg-[#061b09] flex flex-col">
          <div className="w-90 h-screen border-2 border-[#1a3d32] ">
            <h1 className="frances text-white text-2xl p-4">Accounts</h1>
            <div className="w-full h-20 p-4  flex flex-row gap-3">
              <div className="border w-13 h-13 border-black p-3 rounded-[50%] bg-amber-700 ">
                <p className="font-bold">MI</p>
              </div>
              <div className="flex flex-col gap-0 text-white">
                <h3 className="text-base font-bold">Mubashir Imran</h3>
                <p>unimubashir2@gmail.com</p>
              </div>

              <div className="spends w-full h-10 p-2 pl-4">
                <p className=" text-[#9da99e]">Expense Reports</p>
              </div>
            </div>
          </div>
         <div className="spends w-full h-10 p-2 pl-4">
            <p className=" text-[#9da99e]">Expense Reports</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Accounts;
