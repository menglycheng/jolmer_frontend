import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuth } from "@/auth/auth";
import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
  const { user } = useAuth();
  // console.log(user);

  return (
    <div>
      <header className="top-0 px-5 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20">
        <Link href="/" className="flex items-center text-primary-blue">
          <img
            src="/icon/icon.png"
            width={60}
            height={60}
            className="change-color rounded-full"
          />

          {/* <FaceSmileIcon className="w-9 h-9" /> */}
          <div className="hidden md:inline">
            <p className="font-bold text-lg md:text-4xl">Jolmer</p>
            <p className="font-bold text-[7px]">
              Opportunity await, come and see
            </p>
          </div>
        </Link>
        {user ? (
          <div className="flex items-center space-x-2">
            {user.organizer && (
              <Link href="/create-event">
                <button className="flex justify-center items-center bg-primary-blue rounded-full text-sm md:text-base text-white font-bold w-12 h-8 lg:w-16 lg:h-10">
                  <PlusIcon className="icon" />
                </button>
              </Link>
            )}
            <Link
              href="/profile"
              className="flex items-center justify-center space-x-1 w-28 h-10 md:w-36  border-primary-blue border-2 rounded-2xl text-base md:text-xl text-primary-blue font-semibold"
            >
              {/* <img src="public/vercel.svg" alt="" /> */}
              <FaceSmileIcon className="w-7 h-7 md:w-9 md:h-9" />
              <p>{user.firstName}</p>
            </Link>
          </div>
        ) : (
          <div className="space-x-3 md:space-x-8">
            <Link
              href="/about"
              className="font-semibold text-base md:text-lg hover:underline hover:text-primary-blue"
            >
              About us
            </Link>
            <Link href="/login">
              <button className="bg-primary-blue rounded-full text-sm md:text-base text-white font-bold w-20 h-8 lg:w-28 lg:h-10">
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
