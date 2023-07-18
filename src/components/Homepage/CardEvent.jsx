import React from "react";
import { EyeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./CountDown";

const CardEvent = ({ data }) => {
  const currentDate = new Date();

  return (
    <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center mt-20">
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/details/${item.id}`}
          class="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md"
        >
          <div class="relative">
            <Image
              width={300}
              height={300}
              class="rounded-t-lg w-full bg-black h-52 object-cover"
              src={item.poster}
              alt="Poster"
            />
            <p class="text-[10px] bg-primary-yellow absolute top-2 left-2 rounded-full px-1 py-0.5 font-semibold">
              {item.category}
            </p>
          </div>

          <div class="px-5 py-3">
            <h5 class="mb-2 text-2xl text-center font-bold truncate max-w-xs">
              {item.title}
            </h5>
            <p class="py-3 mb-3 flex justify-center flex-grow">
              {new Date(item.deadline) < currentDate ? (
                <span className="text-red-400 font-semibold text-3xl py-3">
                  Event Expired
                </span>
              ) : (
                <CountdownTimer deadline={item.deadline} />
              )}
            </p>

            <div class="flex items-center text-sm justify-between space-x-2">
              <div className="flex items-center space-x-1">
                <MapPinIcon className="icon" />
                <p className="truncate max-w-[150px]">{item.location}</p>
              </div>
              <div className="flex items-center space-x-1">
                <EyeIcon className="icon" />
                <p>{item.views}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardEvent;
