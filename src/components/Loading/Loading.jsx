import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex items-center gap-2">
        <BiLoaderAlt className="text-3xl animate-spin" />
        <span className="text-lg font-bold">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
