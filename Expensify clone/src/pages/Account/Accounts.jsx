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

const Accounts = ({ dark }) => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Dashboard dark={dark} />

      <div className={`w-90 h-auto scrollbar-none border-r overflow-y-auto ${dark ? "border-[#1a3d32] bg-[#061b09]" : "border-gray-200 bg-white"}`}>
        <h1 className={`frances text-2xl p-4 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Account</h1>
        <div className="w-full p-4 flex flex-row items-center gap-3">
          <div className="w-13 h-13 flex items-center justify-center rounded-full bg-amber-700 shrink-0">
            <p className="font-bold text-white">MI</p>
          </div>
          <div className={`flex flex-col ${dark ? "text-white" : "text-[#0B2E1F]"}`}>
            <h3 className="text-base font-bold">Mubashir Imran</h3>
            <p className={`text-sm ${dark ? "text-[#9da99e]" : "text-gray-500"}`}>unimubashir2@gmail.com</p>
          </div>
        </div>
        <p className={`text-sm px-4 pt-2 pb-1 ${dark ? "text-[#9da99e]" : "text-gray-500"}`}>Account</p>
        <div className="flex flex-col px-2">
          <Link to={"profile"} className="w-full block">
            <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left w-full ${dark ? "hover:bg-[#1a3d32] text-white" : "hover:bg-gray-100 text-[#0B2E1F]"}`}>
              <CgProfile className="text-xl" />
              <span className="font-bold text-sm">Profile</span>
            </button>
          </Link>

          <Link to={"wallet"} className="w-full block">
            <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left w-full ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
              <MdOutlineMailOutline className="text-xl" />
              <span className="font-bold text-sm">Wallet</span>
            </button>
          </Link>

          <Link to={"rules"} className="w-full block">
            <button className={`flex flex-row items-center gap-3 px-3 py-3 w-full rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
              <BsLightningCharge className="text-xl" />
              <span className="font-bold text-sm">Expense rules</span>
            </button>
          </Link>

          <Link to={"agents"} className="w-full block">
            <button className={`flex flex-row items-center justify-between w-full gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
              <span className="flex flex-row items-center gap-3">
                <HiOutlineChip className="text-xl" />
                <span className="font-bold text-sm">Agents</span>
              </span>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${dark ? "bg-[#1a3d32] text-[#9da99e]" : "bg-gray-100 text-gray-500"}`}>
                Beta
              </span>
            </button>
          </Link>

          <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
            <IoSettingsOutline className="text-xl" />
            <span className="font-bold text-sm">Preferences</span>
          </button>

          <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
            <HiOutlineUserGroup className="text-xl" />
            <span className="font-bold text-sm">Copilot</span>
          </button>

          <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
            <LuLock className="text-xl" />
            <span className="font-bold text-sm">Security</span>
          </button>
        </div>

        <hr className={dark ? "border-[#1a3d32] my-3 mx-4" : "border-gray-200 my-3 mx-4"} />
        <p className={`text-sm px-4 pt-1 pb-1 ${dark ? "text-[#9da99e]" : "text-gray-500"}`}>General</p>
        <div className="flex flex-col px-2">
          <button className={`flex flex-row items-center gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
            <IoHelpCircleOutline className="text-xl" />
            <span className="font-bold text-sm">Help</span>
          </button>
          <Link to={"/"} className="w-full block">
            <button className={`flex flex-row w-full items-center gap-3 px-3 py-3 rounded-lg text-left ${dark ? "text-[#9da99e] hover:bg-[#1a3d32]" : "text-gray-500 hover:bg-gray-100"}`}>
              <PiSignOutBold className="text-xl" />
              <span className="font-bold text-sm">Sign Out</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Nested account route renders here */}
      <div className={`w-full h-screen overflow-y-auto ${dark ? "bg-[#061b09]" : "bg-white"}`}>
        <Outlet context={{ dark }} />
      </div>
    </div>
  );
};

export default Accounts;