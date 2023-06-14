import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const Navbar = () => {
  const token = "fdfd";
  return (
    <div>
      <header className="top-0 px-5 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20">
        <Link
          href="/"
          className="flex items-center space-x-2 text-primary-blue"
        >
          <FaceSmileIcon className="w-9 h-9" />
          <p className="font-bold text-lg md:text-xl">Jolmer</p>
        </Link>
        {token ? (
          <button className="flex items-center justify-center space-x-1 md:space-x-2 w-32 h-10 md:w-36 lg:w-40 lg:h-12 border-primary-blue border-2 rounded-2xl text-lg md:text-xl text-primary-blue font-semibold">
            {/* <img src="public/vercel.svg" alt="" /> */}
            <FaceSmileIcon className="w-9 h-9" />
            <p>Mengly</p>
          </button>
        ) : (
          <div className="space-x-3 md:space-x-8">
            <Link
              href="/about"
              className="font-semibold text-base md:text-lg hover:underline hover:text-primary-blue"
            >
              About us
            </Link>
            <button class=" bg-primary-blue rounded-full text-sm md:text-base text-white font-bold w-20 h-8 lg:w-28 lg:h-10">
              Join us
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
