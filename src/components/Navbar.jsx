import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const Navbar = () => {
  const token = "";
  return (
    <div>
      <header className="top-0 px-5 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20">
        <Link
          href="/"
          className="flex items-center space-x-2 text-primary-blue"
        >
          <FaceSmileIcon className="w-9 h-9" />
          <p className="font-bold text-xl">Jolmer</p>
        </Link>
        {token ? (
          <button className="flex items-center space-x-1 bg-red-100md:space-x-2 py-0 md:py-2 px-2 md:px-6 border-primary-blue border-2 rounded-2xl text-xl text-primary-blue font-semibold">
            {/* <img src="public/vercel.svg" alt="" /> */}
            <FaceSmileIcon className="w-9 h-9" />
            <p>Mengly</p>
          </button>
        ) : (
          <div className="space-x-3 md:space-x-8">
            <Link href="/about" className="font-semibold text-lg hover:underline hover:text-primary-blue">
              About us
            </Link>
            <Link href="/login" >
              <button className="py-1 px-6 bg-primary-blue rounded-full text-base text-white font-bold">
              Join us
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
