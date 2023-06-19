import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import React from "react";

const RegisterBeOrganizerTab = () => {
  return (
    <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4">
          <BuildingOfficeIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Become an organizer
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg pb-3">
            Please provide your organizer info
          </p>
        </div>
        <div className="flex flex-col text-base">
        <p className="font-bold text-sm">Organization name *</p>
            <input
              type="name"
              placeholder="Enter your organization name"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 "
            ></input>
            <p className="font-bold text-sm">Facebook page *</p>
            <input
              type="name"
              placeholder="Enter your organization Facebook name"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            ></input>
            <p className="font-bold text-sm">Organization email *</p>
            <input
              type="email"
              placeholder="Enter your organizatin email"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            ></input>

            <button className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500">
              Sign up
            </button>

        </div>
    </div>
  );
};

export default RegisterBeOrganizerTab;
