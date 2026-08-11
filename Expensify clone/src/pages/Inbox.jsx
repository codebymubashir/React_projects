import React, { useState, useRef, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Greenbtn from "../components/Greenbtn";
import { Plus, Send } from "lucide-react";

const Inbox = () => {
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
        <Dashboard />
        <div className="w-90 h-85vh bg-[#061b09] border-2 border-[#1a3d32]">
          <h1 className="frances text-white text-4xl p-4">Inbox</h1>
          <div className="w-full h-20 flex flex-row gap-3 p-4 text-white">
            <button className="icons font-bold rounded-4xl border w-30 h-10">
              All
            </button>
            <button className="icons font-bold rounded-4xl border w-30 h-10">
              Unread
            </button>
            <button className="icons font-bold rounded-4xl border w-30 h-10">
              To dos
            </button>
          </div>
          <div className="w-full h-20 border border-white ">
            <div className="flex flex-col text-white p-3">
              <h2 className="text-2xl font-bold">Natasha</h2>
              <p>No, I'm just an Expensify assistant</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[97vh] bg-[#061b09] flex flex-col">
          <div className="w-full h-20 p-2 flex flex-row gap-3 bg-[#061b09] border border-[#1a3d32]">
            <div className="border w-13 h-13 border-black p-3 ml-2 rounded-[50%] bg-amber-700 ">
              <p className="font-bold">NA</p>
            </div>
            <h2 className="text-white text-center text-3xl mt-2">Natasha</h2>
          </div>

          <div className="flex-1 overflow-y-auto border border-[#1a3d32]">
            <ul>
              {items.map((item, index) => (
                <li className="text-white text-2xl px-3" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div ref={scrollRef} />
          </div>

          <div
            className="flex items-center gap-3 bg-[#0a1a14] border border-green-500/60 
                    rounded-full px-4 py-3 w-full"
          >
            <button className="text-gray-300 hover:text-white transition-colors">
              <Plus size={20} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Write something..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 
                   outline-none text-sm"
            />

            <button
              onClick={handleAdd}
              className="text-gray-300 hover:text-white transition-colors"
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