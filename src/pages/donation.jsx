import React from "react";
import ABA from "../../public/image/ABA.jpg";
const donation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Donation
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </div>
      <img className="w-1/2" src={ABA.src} alt="" />
    </div>
  );
};

export default donation;
