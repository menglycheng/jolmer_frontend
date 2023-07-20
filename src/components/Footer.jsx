import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 max-w-screen-xl mx-auto z-20 mt-20 px-5">
      <div className="flex justify-center items-center">
        <div className="flex flex-col px-5 md:flex-row divide-y md:divide-y-0 md:divide-x space-y-5 md:space-y-0 divide-gray-300 lg:space-x-28">
          <div className="lg:pr-10 md:px-5">
            <h3 className="font-bold text-xl md:text-2xl pb-4 pt-3 md:pt-0">
              Jolmer
            </h3>
            <p className="text-primary-lowRed font-medium text-sm max-w-lg">
              Giving everyone with everything they want to build their future
            </p>
          </div>
          <div className="lg:px-10 md:px-5">
            <h3 className="font-bold text-xl pb-4 pt-3 md:pt-0">Sidemap</h3>
            <div className="flex flex-col items-start space-y-3 text-sm font-medium  text-primary-lowRed">
              <Link
                className="align-baseline text-start hover:text-primary-blue hover:underline "
                href="/term-of-use"
              >
                Term & Conditions
              </Link>
              <Link
                className="hover:text-primary-blue hover:underline"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="hover:text-primary-blue hover:underline"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="hover:text-primary-blue hover:underline"
                href="/meet-our-team"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
          <div className="lg:px-10 md:px-5">
            <h3 className="font-bold text-xl pb-4 pt-3 md:pt-0">Contact</h3>
            <div className="flex flex-col items-start space-y-3 text-sm font-medium text-primary-lowRed">
              <button
                className="hover:text-primary-blue hover:underline"
                href="/"
              >
                Phone
              </button>
              <Link
                className="hover:text-primary-blue hover:underline"
                href="/donation"
              >
                Donation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
