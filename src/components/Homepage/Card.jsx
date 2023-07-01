import React from "react";
import { EyeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center mt-20">
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

          <div class="p-5">
            <h5 class="mb-2 text-2xl text-center font-bold">{item.title}</h5>
            <p class="mb-3 font-normal text-center text-gray-700">
              {item.deadline}
            </p>
            <div class="flex items-center text-sm justify-between space-x-2">
              <div className="flex items-center space-x-1">
                <MapPinIcon className="icon" />
                <p>{item.location}</p>
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

export default Card;
