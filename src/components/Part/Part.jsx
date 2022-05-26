import React from "react";
import { Link } from "react-router-dom";

const Part = ({ className, part }) => {
  return (
    <div className={`shadow-lg p-4 rounded-lg relative border-2 ${className}`}>
      <img
        className="w-full h-52 object-cover rounded-md"
        src={part.image}
        alt="mouse"
      />

      <div className="mt-5">
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-700">
          {part.name}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500">
          {part.short_description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-center mt-2">
          <div className="bg-zinc-300 cursor-pointer text-zinc-800 py-2 rounded-md">
            <span className="text-xs sm:text-sm md:text-base">
              Available :
              <span className="font-bold text-zinc-600">{part.quantity}</span>
            </span>
          </div>

          <div className="bg-zinc-300 cursor-pointer text-zinc-800 py-2 rounded-md">
            <span className="text-xs sm:text-sm md:text-base">
              <span>Min Order :</span>
              <span className="font-bold text-zinc-600">{part.min_order}</span>
            </span>
          </div>

          <Link
            className="bg-black text-zinc-200 py-2 rounded-md col-span-2"
            to={`/shop/${part._id}`}
          >
            Order Now
          </Link>
        </div>
      </div>

      <div className="w-max px-3 py-2 bg-zinc-600 text-white font-bold text-sm absolute top-2 right-2 rounded-lg">
        $100
      </div>
    </div>
  );
};

export default Part;
