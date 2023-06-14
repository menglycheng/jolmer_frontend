import React from "react";
import { EyeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6  place-content-center mt-20">
      {data.map((item) => (
        <div
          key={item.id}
          class="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md"
        >
          <div class="relative">
            <Image
              width={300}
              height={300}
              class="rounded-t-lg"
              src="/SmartSpark8-Webinar.jpg"
              alt=""
            />
            <p class="text-[10px] bg-primary-yellow absolute top-2 left-2 rounded-full px-1 py-0.5 font-semibold">
              {item.status}
            </p>
          </div>

          <div class="p-5">
            <h5 class="mb-2 text-2xl text-center font-bold">
              {item.Orgainize}
            </h5>
            <p class="mb-3 font-normal text-center text-gray-700">
              {item.Date}
            </p>
            <div class="flex items-center text-sm justify-between">
              <div className="flex items-center space-x-1">
                <MapPinIcon className="icon" />
                <p>{item.location}</p>
              </div>
              <div className="flex items-center space-x-1">
                <EyeIcon className="icon" />
                <p>{item.view}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
