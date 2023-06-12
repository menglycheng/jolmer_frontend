import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 py-10 max-w-screen-xl mx-auto z-20 mt-20 px-5">
      <div className="flex justify-center items-center">
        <div className="flex divide-x divide-gray-300 lg:space-x-28">
          <div className="lg:pr-10 px-5">
            <h3 className="font-bold text-xl md:text-3xl pb-4">Checkme</h3>
            <p className="text-primary-lowRed font-medium text-sm md:text-xl max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              illum quo esse impedit
            </p>
          </div>
          <div className="lg:px-10 px-5">
            <h3 className="font-bold text-xl md:text-2xl pb-4">Sidemap</h3>
            <div className="flex flex-col items-start space-y-3 text-sm md:text-xl font-medium text-primary-lowRed">
              <Link className="align-baseline text-start" href="/term-of-use">
                Term & Conditions
              </Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/about">About us</Link>
            </div>
          </div>
          <div className="lg:px-10 px-5">
            <h3 className="font-bold text-xl md:text-2xl pb-4">Sidemap</h3>
            <div className="flex flex-col items-start space-y-3 text-sm md:text-xl font-medium text-primary-lowRed">
              <button href="/">Phone</button>
              <button href="/">Donation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
