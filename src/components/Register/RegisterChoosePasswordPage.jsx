import { LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";

const RegisterChoosePasswordPage = () => {
  return (
    <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4">
          <LockClosedIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Choose a Password
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg pb-3">
            Must be at least 8 characters
          </p>
        </div>
        <div className="flex flex-col text-base">
        <p className="font-bold text-sm">Password *</p>
            <input
              type="password"
              placeholder="choose a password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 "
            ></input>
            <p className="font-bold text-sm">Confirm password *</p>
            <input
              type="password"
              placeholder="confirm password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            ></input>

            <button className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96">
              Continue sign up
            </button>
            <button className=" text-primary-blue py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96">
              Become an organizer?
            </button>

        </div>
    </div>
  );
};

export default RegisterChoosePasswordPage;
