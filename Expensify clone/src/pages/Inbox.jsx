import React, { useState, useRef, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Greenbtn from "../components/Greenbtn";
import { Plus, Send } from "lucide-react";

const Inbox = ({ dark }) => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems((prev) => [...prev, input]);
    setInput("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items]);

  return (
    <>
      <div className="flex flex-row">
        <Dashboard dark={dark} />

        {/* Middle column - conversation list */}
        <div className={`w-90 h-85vh border-2 ${dark ? "bg-[#061b09] border-[#1a3d32]" : "bg-white border-gray-200"}`}>
          <h1 className={`frances text-4xl p-4 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Inbox</h1>

          <div className={`w-full h-20 flex flex-row gap-3 p-4 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>
            <button className={`icons font-bold rounded-4xl border w-30 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
              All
            </button>
            <button className={`icons font-bold rounded-4xl border w-30 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
              Unread
            </button>
            <button className={`icons font-bold rounded-4xl border w-30 h-10 ${dark ? "border-white" : "border-gray-300"}`}>
              To dos
            </button>
          </div>

          <div className={`w-full h-20 border ${dark ? "border-white" : "border-gray-200"}`}>
            <div className={`flex flex-col p-3 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>
              <h2 className="text-2xl font-bold">Natasha</h2>
              <p>No, I'm just an Expensify assistant</p>
            </div>
          </div>
        </div>

        {/* Right column - chat window */}
        <div className={`w-full h-[97vh] flex flex-col ${dark ? "bg-[#061b09]" : "bg-white"}`}>
          <div className={`w-full h-20 p-2 flex flex-row gap-3 border ${dark ? "bg-[#061b09] border-[#1a3d32]" : "bg-white border-gray-200"}`}>
            <div className="border w-13 h-13 border-black p-3 ml-2 rounded-[50%] bg-amber-700">
              <p className="font-bold">NA</p>
            </div>
            <h2 className={`text-center text-3xl mt-2 ${dark ? "text-white" : "text-[#0B2E1F]"}`}>Natasha</h2>
          </div>

          <div className={`flex-1 overflow-y-auto border ${dark ? "border-[#1a3d32]" : "border-gray-200"}`}>
            <ul>
              {items.map((item, index) => (
                <li
                  className={`flex flex-col text-2xl px-3 ${dark ? "text-white" : "text-[#0B2E1F]"}`}
                  key={index}
                >
                  Natasha {item}
                </li>
              ))}
            </ul>
            <div ref={scrollRef} />
          </div>

          <div
            className={`flex items-center gap-3 rounded-full px-4 py-3 w-full border ${
              dark ? "bg-[#0a1a14] border-green-500/60" : "bg-gray-50 border-green-600/40"
            }`}
          >
            <button className={dark ? "text-gray-300 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
              <Plus size={20} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Write something..."
              className={`flex-1 bg-transparent outline-none text-sm ${
                dark ? "text-white placeholder-gray-400" : "text-black placeholder-gray-500"
              }`}
            />

            <button
              onClick={handleAdd}
              className={dark ? "text-gray-300 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;