import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
    
  return (
  <div>
    <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center space-y-4">
          <FaceSmileIcon className="w-10 h-10 border border-primary-lowOrange  rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">Welcome Back</p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg">Please enter your name and email</p>
          <div className="flex flex-col text-base">
                 <button className="bg-white text-black py-2 px-28 rounded-md border border-1 my-3  border-primary-lowRed text-xs md:text-sm lg:text-base ">
                  <span>
                  </span>
                  Login with Google
                 </button>
            <button className="bg-primary-blue text-white py-2 px-28 rounded-md border border-1 my-3  border-primary-blue text-xs md:text-sm lg:text-base ">Login with Facebook</button>

            <div className="flex items-center py-6 pb-10">
                <hr className="border-t border-primary-lowRed  flex-grow" />
                <span className="text-black mx-4">OR</span>
                <hr className="border-t border-primary-lowRed flex-grow" />
            </div>

           
          <p className="font-bold text-sm">Email *</p>
          <input type="email" placeholder="Enter your email" className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base" ></input>
          <p className="font-bold text-sm">Password *</p>
          <input type="password" placeholder="Enter your password" className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base"></input>

          
          <div className="flex justify-between">
              <label className=" flex items-center text-xs text-primary-lowRed ">
              <input 
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 mr-2"
                  name="remember"
               />
                  Remember for 30 days
              </label>
              <a href="#" className="text-xs text-primary-blue">Forgot password?</a>
          </div>
          <button className="bg-primary-blue text-white py-2 px-28 rounded-md border border-1 my-5  border-primary-blue text-xs md:text-sm lg:text-base">Login</button>
          <div className="flex items-center justify-center text-sm">
            <p className="mr-3 text-primary-lowRed">Not registered yet?</p>
            <Link className="text-primary-blue" href="/register">Create an account?</Link>
          </div>
          </div>
         
        
            
            
        </div>

      </div>
  </div>
  );
};

export default Login;
