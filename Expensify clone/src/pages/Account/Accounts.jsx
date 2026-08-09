import React from "react";
import Dashboard from "../../components/Dashboard";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineChip } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuLock } from "react-icons/lu";
import { IoHelpCircleOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Accounts = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Dashboard />

      <div className="w-90 h-auto scrollbar-none border-r border-[#1a3d32] bg-[#061b09] overflow-y-auto">
        <h1 className="frances text-white text-2xl p-4">Account</h1>
        <div className="w-full p-4 flex flex-row items-center gap-3">
          <div className="w-13 h-13 flex items-center justify-center rounded-full bg-amber-700 shrink-0">
            <p className="font-bold text-white">MI</p>
          </div>
          <div className="flex flex-col text-white">
            <h3 className="text-base font-bold">Mubashir Imran</h3>
            <p className="text-sm text-[#9da99e]">unimubashir2@gmail.com</p>
          </div>
        </div>
        <p className="text-[#9da99e] text-sm px-4 pt-2 pb-1">Account</p>
        <div className="flex flex-col  px-2">
          <Link to={"profile"} className="w-full block">
            <button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left hover:bg-[#1a3d32] text-white w-full">
              <CgProfile className="text-xl" />
              <span className="font-bold text-sm">Profile</span>
            </button>
          </Link>

          <Link to={"wallet"} className="w-full block"><button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] w-full hover:bg-[#1a3d32]">
            <MdOutlineMailOutline className="text-xl" />
            <span className="font-bold text-sm">Wallet</span>
          </button></Link>

          <Link to={"rules"} className="w-full block"><button className="flex flex-row items-center gap-3 px-3 py-3 w-full rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <BsLightningCharge className="text-xl" />
            <span className="font-bold text-sm">Expense rules</span>
          </button></Link>

         <Link to={"agents"} className="w-full block"> <button className="flex flex-row items-center justify-between w-full gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <span className="flex flex-row items-center gap-3">
              <HiOutlineChip className="text-xl" />
              <span className="font-bold text-sm">Agents</span>
            </span>
            <span className="text-[10px] font-bold bg-[#1a3d32] text-[#9da99e] px-2 py-1 rounded-full">
              Beta
            </span>
          </button></Link>

          <button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <IoSettingsOutline className="text-xl" />
            <span className="font-bold text-sm">Preferences</span>
          </button>

          <button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <HiOutlineUserGroup className="text-xl" />
            <span className="font-bold text-sm">Copilot</span>
          </button>

          <button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <LuLock className="text-xl" />
            <span className="font-bold text-sm">Security</span>
          </button>
        </div>

        <hr className="border-[#1a3d32] my-3 mx-4" />
        <p className="text-[#9da99e] text-sm px-4 pt-1 pb-1">General</p>
        <div className="flex flex-col px-2">
          <button className="flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <IoHelpCircleOutline className="text-xl" />
            <span className="font-bold text-sm">Help</span>
          </button>
          <Link to={"/"} className="w-full block"><button className="flex flex-row w-full items-center gap-3 px-3 py-3 rounded-lg text-left text-[#9da99e] hover:bg-[#1a3d32]">
            <PiSignOutBold className="text-xl" />
            <span className="font-bold text-sm">Sign Out</span>
          </button></Link>
        </div>
      </div>

      {/* Nested account route renders here */}
      <div className="w-full h-screen bg-[#061b09] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Accounts;