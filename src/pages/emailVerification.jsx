import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import {EnvelopeIcon, ChevronLeftIcon  } from "@heroicons/react/24/outline";
import React from "react";

const EmailVerification = () => {
  return (
    <div>
      <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 ">
          <EnvelopeIcon  className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Email verification
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg text-center">
          We have sent an email to abc@gmail.com  to confirm the validity of the email address. <br></br>
          Simply click the confirmation button to complete the process. 
          </p>
          
          <br/>
          <br/>
          <button
                type="submit"
                className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 ">
                Resend
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

export default EmailVerification; 
