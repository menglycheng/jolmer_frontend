import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
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

  const currentDate = new Date();

  const filteredData = EventData.filter((item) => {
    if (showAll) {
      return new Date(item.deadline) > currentDate;
    } else if (showCompetition) {
      return (
        item.category === "COMPETITION" && new Date(item.deadline) > currentDate
      );
    } else if (showVolunteer) {
      return (
        item.category === "VOLUNTEER" && new Date(item.deadline) > currentDate
      );
    }
    return false;
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredData.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalEvents = filteredData.length;

  return (
    <div className="px-5 max-w-screen-xl mx-auto flex flex-col min-h-screen">
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
      <div className="flex-grow">
        {loading ? (
          <div class="h-screen">
            <div class="flex justify-center items-center h-full">
              <img
                class="h-16 w-16"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt=""
              />
            </div>
          </div>
        ) : error ? (
          <div class="h-screen">
            <div class="flex justify-center items-center h-full">
              <h1 className="text-4xl font-semibold">No Event</h1>
            </div>
          </div>
        ) : (
          <Card data={currentEvents} />
        )}
      </div>
      <div className="mt-10 mx-auto flex justify-center">
        <Paginator
          totalEvents={totalEvents}
          eventsPerPage={eventsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
