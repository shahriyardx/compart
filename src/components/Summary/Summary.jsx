import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Summary = ({ count, title, desc, icon }) => {
  const Icon = icon;
  return (
    <div className="bg-black p-5 rounded-br-3xl text-zinc-200">
      <div className="flex items-center gap-2">
        <Icon className="text-4xl text-green-600" />
        <h1 className="text-4xl my-3 font-bold">{count}+</h1>
      </div>

      <div className="text-right mt-5 pb-3 mb-3 border-0 border-b-2 border-dashed border-b-zinc-700">
        <h3 className="text-2xl text-zinc-300 font-bold">{title}</h3>
        <p className="text-zinc-500">{desc}</p>
      </div>

      <div className="text-green-400 flex justify-end items-center">
        <a href="#" className="font-semibold">
          Read more
        </a>
        <BiChevronRight className="text-2xl -mb-1" />
      </div>
    </div>
  );
};

export default Summary;
