import React from "react";

const about = () => {
  return (
    <div className="px-5 py-10 max-w-screen-xl mx-auto mt-10">
      <div className="flex justify-between lg:space-x-72 space-x-10">
        <div>
          <h1 className="font-bold text-3xl md:text-4xl">About Us</h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-10 mt-2"></div>
          <p className="font-medium mt-5 md:text-xl  max-w-xl">
            Creating the digital platform where developers can build and improve
            their skills to the next level in Tech world through the Hackathons
            and Competition events that posted on our platform. We want to power
            all the software developers to become world class engineers....
          </p>
        </div>
        <div className="hidden md:inline">
          <img
            src="/TeamWork 1.png"
            alt=""
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center space-x-2 ">
          <div className="h-[4px] rounded-full bg-primary-blue w-5"></div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Vision</h1>
        </div>
        <p className="font-medium mt-4 max-w-xs md:max-w-lg md:text-xl ">
          <span className="text-primary-yellow font-bold">“</span> Giving
          everyone with everything they want to build their future{" "}
          <span className="text-primary-yellow font-bold">”</span>
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-center space-x-2 justify-end">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Mission
          </h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-5"></div>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <p className="font-medium mt-4 text-end max-w-xs md:max-w-lg md:text-xl ">
            <span className="text-primary-yellow font-bold">“</span> Giving
            everyone with everything they want to build their future{" "}
            <span className="text-primary-yellow font-bold">”</span>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="h-[4px] rounded-full bg-primary-blue w-20"></div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Be our partner
          </h1>
          <button className="active">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default about;
