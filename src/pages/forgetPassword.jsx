import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import { LockClosedIcon, ChevronLeftIcon  } from "@heroicons/react/24/outline";
import React from "react";

const ForgetPassword = () => {
  return (
    <div>
      <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 ">
          <LockClosedIcon  className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Forgot Password
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg">
          Enter your email and We will send you a link to reset your password
          </p>
          <br/>
          <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 
                border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center 
                w-72 smxx:w-60 md:w-80 lg:w-96 " 
              ></input>
          <br/>
          <br/>
          <button
                type="submit"
                className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 ">
                Submit
          </button>

          <div class="flex items-center">
            <ChevronLeftIcon  className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
            <p>Back to Login </p>
          </div>
           

        </div>
      </div>
    </div>
  );
};

export default ForgetPassword; 
