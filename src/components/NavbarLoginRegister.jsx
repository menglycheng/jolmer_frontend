import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NavbarLoginRegister = () => {
  return (
    <div className="top-0 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20 smx:pl-5 mdx:pl-5 lg:pl-5">
      <Link href="/" className="flex items-center text-primary-blue">
        <img
          src="/icon/icon.png"
          width={60}
          height={60}
          className="change-color rounded-full"
        />

        {/* <FaceSmileIcon className="w-9 h-9" /> */}
        <div className="">
          <p className="font-bold text-3xl md:text-4xl">Jolmer</p>
          <p className="font-bold text-[6px] md:text-[7px]">
            Opportunity await, come and see
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NavbarLoginRegister;
