import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NavbarLoginRegister = () => {
  return (
    <div className="top-0 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20 smx:pl-5 mdx:pl-5 lg:pl-5">
      <Link href="/" className="flex items-center space-x-2 text-primary-blue">
        <FaceSmileIcon className="w-9 h-9" />
        <p className="font-bold text-xl">Jolmer</p>
      </Link>
    </div>
  );
};

export default NavbarLoginRegister;
