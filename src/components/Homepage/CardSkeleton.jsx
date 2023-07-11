import React from "react";
import { Data } from "../../../utils/Data";

const CardSkeleton = () => {
  return (
    <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center mt-20 ">
      {Data.map((_, i) => (
        <div
          key={i}
          class="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md animate-pulse"
        >
          <div class="relative">
            <div class="rounded-t-lg w-full h-52 object-cover bg-gray-200 dark:text-gray-600"></div>
            <div class="bg-white absolute top-2 left-2 rounded-full px-1 py-0.5 font-semibold w-16 h-2.5"></div>
          </div>

          <div class="px-5 py-3 flex justify-center flex-col">
            <div className="py-5">
              <div class="mb-5 flex justify-center items-center w-40 h-2.5 bg-gray-200 rounded-full m-auto"></div>
              <div class="my-6 mb-3 flex justify-center h-2.5 bg-gray-200 rounded-full m-auto"></div>
            </div>

            <div class="flex items-center text-sm justify-between space-x-2">
              <div className="flex items-center w-14 h-2.5 bg-gray-200 rounded-full"></div>
              <div className="flex items-center w-14 h-2.5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
