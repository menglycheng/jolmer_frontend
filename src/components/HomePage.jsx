import {
  BriefcaseIcon,
  CalendarIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MegaphoneIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Data } from "../../utils/Data";

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showCompetition, setShowCompetition] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
      <div className="flex justify-between items-center">
        <h3 className="hidden lg:inline text-3xl text-primary-lowBlack font-bold">
          Explore
        </h3>
        <div className="flex space-x-2 md:space-x-5">
          <button
            onClick={handleShowAll}
            className={`flex items-center space-x-1 md:space-x-2 py-2 px-2 md:px-6 ${
              showAll
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack"
            } rounded-full text-sm md:text-xl  font-semibold`}
          >
            <WalletIcon className="icon" />
            <p>All</p>
          </button>
          <button
            onClick={handleShowCompetition}
            className={`flex items-center space-x-1 md:space-x-2 py-2 px-2 md:px-6 ${
              showCompetition
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack"
            } rounded-full text-sm md:text-xl  font-semibold`}
          >
            <MegaphoneIcon className="icon" />
            <p>Competition</p>
          </button>
          <button
            onClick={handleShowVolunteer}
            className={`flex items-center space-x-1 md:space-x-2 py-2 px-2 md:px-6 ${
              showVolunteer
                ? "bg-primary-blue text-white"
                : "border-2 border-primary-lowBlack text-primary-lowBlack"
            } rounded-full text-sm md:text-xl  font-semibold`}
          >
            <BriefcaseIcon className="icon" />
            <p>Volunteer</p>
          </button>
        </div>
        <div className="flex space-x-2 md:space-x-5">
          <div className="relative">
            <button onClick={togglePopup} className="relative button">
              <p>Filters</p>
            </button>
            {isPopupOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 p-5 mt-2 rounded-xl shadow-lg space-y-3 right-0">
                <h3>Add Filter</h3>
                <div className="flex space-x-3">
                  <div className="bg-primary-lowOrange items-center justify-center flex-col py-2 px-4 rounded-xl text-primary-blue text-sm font-medium">
                    <CalendarIcon className="h-5 w-5" />
                    <p>Date</p>
                  </div>
                  <div className="bg-primary-lowOrange items-center justify-center flex-col py-2 px-4 rounded-xl text-primary-blue text-sm font-medium">
                    <MapPinIcon className="h-5 w-5 " />
                    <p>Date</p>
                  </div>
                </div>
                <input
                  type="date"
                  className="border-primary-blue border-2 rounded-xl "
                />
              </div>
            )}
          </div>

          <button className="hidden md:inline py-2 px-2 md:px-4 rounded-full border-2 border-primary-lowBlack text-primary-lowBlack font-semibold">
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-14 place-content-center mt-20">
        {filteredData.map((item) => (
          <div
            key={item.id}
            class="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md"
          >
            <a href="">
              <img
                class="rounded-t-lg relative"
                src="/SmartSpark8-Webinar.jpg"
                alt=""
              />
              <div className="text-[10px] bg-primary-yellow absolute top-2 left-2 rounded-full px-1 py-0.5 font-semibold">
                {item.status}
              </div>
            </a>
            <div class="p-5">
              <a href="">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.Orgainize}
                </h5>
              </a>
              <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                {item.Date}
              </p>
              <div class="flex items-center text-sm justify-between">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="icon" />
                  <p>{item.location}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <EyeIcon className="icon" />
                  <p>{item.view}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
