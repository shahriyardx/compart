import React from "react";
import Stars from "./Stars";

const Review = ({ data }) => {
  return (
    <div className="p-4 border-2 rounded-md shadow-sm">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold text-blue-600 font-mono underline underline-offset-2">
          {data.name}
        </h1>
        <Stars />
      </div>

      <div className="mt-5 font-semibold text-zinc-500">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Review;
