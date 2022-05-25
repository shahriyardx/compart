import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashHeader = ({ open, setOpen }) => {
  return (
    <div className="h-16 bg-white flex justify-between px-4 items-center">
      <div className="flex items-center gap-2">
        <BiMenu className="text-2xl lg:hidden" onClick={() => setOpen(!open)} />
        <span className="text-xl md:text-2xl font-black hidden sm:block">
          Dashboard
        </span>
      </div>

      <div className="flex gap-5 items-center">
        <Link className="text-blue-500 underline" to="/">
          Home
        </Link>
        <button
          type="button"
          className="px-3 py-2 bg-red-500 text-white font-semibold rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashHeader;
