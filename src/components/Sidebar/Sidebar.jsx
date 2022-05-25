import React, { useState } from "react";
import { BiX } from "react-icons/bi";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`bg-zinc-800 h-screen transition-all text-zinc-200 fixed lg:static top-0 w-full max-w-[300px] ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <div className="h-16 bg-zinc-700 flex justify-between px-4 items-center">
        <span className="text-xl md:text-2xl font-black">Dashboard</span>
        <BiX
          className="text-3xl text-red-500 lg:hidden"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default Sidebar;