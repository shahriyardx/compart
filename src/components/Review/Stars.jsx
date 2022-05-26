import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Stars = () => {
  return (
    <div className="flex items-center gap-2 text-xl text-yellow-400">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
};

export default Stars;
