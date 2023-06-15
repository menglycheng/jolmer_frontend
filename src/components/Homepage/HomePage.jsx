import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Data } from "../../../utils/Data";
import Card from "./Card";

const HomePage = () => {
  const [showAll, setShowAll] = useState(true);
  const [showCompetition, setShowCompetition] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
    setShowCompetition(false);
    setShowVolunteer(false);
  };

  const handleShowCompetition = () => {
    setShowAll(false);
    setShowCompetition(true);
    setShowVolunteer(false);
  };

  const handleShowVolunteer = () => {
    setShowAll(false);
    setShowCompetition(false);
    setShowVolunteer(true);
  };

  const filteredData = Data.filter((item) => {
    if (showAll) {
      return true;
    } else if (showCompetition) {
      return item.status === "Competition";
    } else if (showVolunteer) {
      return item.status === "Volunteer";
    }
    return false;
  });

  return (
    <div className="px-5 max-w-screen-xl mx-auto">
      <div className="flex justify-center md:justify-between items-center">
        <h3 className="hidden lg:inline text-2xl text-primary-lowBlack font-bold">
          Explore
        </h3>
        <div className="flex space-x-2 md:space-x-5">
          <button
            onClick={handleShowAll}
            className={`flex items-center space-x-1 md:space-x-2 justify-center w-20 h-8 md:w-28 md:h-10 ${
              showAll
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack btn-hover"
            } rounded-full text-sm md:text-base  font-semibold`}
          >
            <WalletIcon className="icon" />
            <p>All</p>
          </button>
          <button
            onClick={handleShowCompetition}
            className={`flex items-center space-x-1 md:space-x-2 justify-center w-36 h-8 md:w-44 md:h-10 ${
              showCompetition
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack btn-hover"
            } rounded-full text-sm md:text-base  font-semibold `}
          >
            <MegaphoneIcon className="icon" />
            <p>Competition</p>
          </button>
          <button
            onClick={handleShowVolunteer}
            className={`flex items-center space-x-1 md:space-x-2 justify-center w-32 h-8 md:w-40 md:h-10 ${
              showVolunteer
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack btn-hover"
            } rounded-full text-sm md:text-base  font-semibold`}
          >
            <BriefcaseIcon className="icon" />
            <p>Volunteer</p>
          </button>
        </div>

        <button className="hidden md:flex btn-hover rounded-full border-2 border-primary-lowBlack text-primary-lowBlack font-semibold  w-8 h-8 md:w-10 md:h-10 items-center justify-center">
          <MagnifyingGlassIcon className="icon" />
        </button>
      </div>
      <Card data={filteredData} />
    </div>
  );
};

export default HomePage;
