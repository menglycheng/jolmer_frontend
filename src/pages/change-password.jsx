import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import { LockClosedIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import Head from "next/head";

const ChangePassword = () => {
  return (
    <div>
      <Head>
        <title>Change password | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 ">
          <LockClosedIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Change Password
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg">
            Must be at least 8 characters
          </p>
          <br />

          <div className="flex flex-col text-base">
            <p className="font-bold text-sm">Old Password *</p>
            <input
              type="password"
              placeholder="Enter old password"
              name="password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 
                border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center 
                w-72 smxx:w-60 md:w-80 lg:w-96 "
            ></input>
            <br />

            <p className="font-bold text-sm">New Password *</p>
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 
                border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center 
                w-72 smxx:w-60 md:w-80 lg:w-96 "
            ></input>
            <br />

            <p className="font-bold text-sm">Confirm new password *</p>
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 
                border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center 
                w-72 smxx:w-60 md:w-80 lg:w-96 "
            ></input>
            <br />

            <button
              type="submit"
              className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
