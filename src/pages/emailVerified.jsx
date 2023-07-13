import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import {EnvelopeIcon, ChevronLeftIcon, CheckCircleIcon, EnvelopeOpenIcon  } from "@heroicons/react/24/outline";
import React from "react";

const EmailVerified = () => {
  return (
    <div>
      <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 ">
          <EnvelopeOpenIcon  className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />

          <div class="flex items-center">
          <CheckCircleIcon  className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="text-green-600 font-bold text-xl md:text-2xl lg:text-3xl">
            Email verification
          </p>
          </div>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg text-center">
          You may proceed to our website.
          </p>
          
          <br/>
          <br/>
          <button
                type="submit"
                className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 ">
                Go to homepage
          </button>
           

        </div>
      </div>
    </div>
  );
};

export default EmailVerified; 
