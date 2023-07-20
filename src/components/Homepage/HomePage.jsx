import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { getEvent } from "@/pages/api/Event";
import Paginator from "./Paginator";
import CardSkeleton from "./CardSkeleton";
import CardEvent from "./CardEvent";

const HomePage = () => {
  const [showAll, setShowAll] = useState(true);
  const [showCompetition, setShowCompetition] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [EventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getEvent();
      setEventData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  }

  const handleShowAll = () => {
    setShowAll(true);
    setShowCompetition(false);
    setShowVolunteer(false);
    setCurrentPage(1); // Reset currentPage to 1 when changing the category
  };

  const handleShowCompetition = () => {
    setShowAll(false);
    setShowCompetition(true);
    setShowVolunteer(false);
    setCurrentPage(1); // Reset currentPage to 1 when changing the category
  };

  const handleShowVolunteer = () => {
    setShowAll(false);
    setShowCompetition(false);
    setShowVolunteer(true);
    setCurrentPage(1); // Reset currentPage to 1 when changing the category
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

  const filteredEvents = filteredData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const indexOfLastEvent = currentPage * eventsPerPage;
  // const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  // const currentEvents = filteredData.slice(indexOfFirstEvent, indexOfLastEvent);
  // const totalEvents = filteredData.length;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const currentEvent = currentEvents.sort((a, b) => b.id - a.id);
  const totalEvents = filteredEvents.length;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  return (
    <div className="px-5 max-w-screen-xl mx-auto flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex justify-between items-center md:w-[70%]">
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
        </div>
        <div className="flex relative mt-5 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className={`${
              active ? "h-8 md:w-44 md:h-10" : "w-full h-8 md:w-0 md:h-10"
            } text-primary-lowBlack border-2 border-primary-lowBlack rounded-full transition-all ease-in-out duration-500  px-4`}
          />
          <button
            onClick={handleClick}
            className="absolute z-10 -right-[3px] flex btn-hover bg-white rounded-full border-2 border-primary-lowBlack text-primary-lowBlack font-semibold  w-8 h-8 md:w-10 md:h-10 items-center justify-center"
          >
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
      </div>

      <div className="flex-grow">
        {loading ? (
          <CardSkeleton />
        ) : error ? (
          <div class="h-screen">
            <div class="flex justify-center items-center h-full">
              <h1 className="text-4xl font-semibold">No Event</h1>
            </div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div class="h-screen">
            <div class="flex justify-center items-center h-full">
              <h1 className="text-4xl font-semibold">No Result</h1>
            </div>
          </div>
        ) : (
          <CardEvent data={currentEvent} />
        )}
      </div>
      <div className="mt-10 mx-auto flex justify-center">
        {loading || error ? (
          <div></div>
        ) : (
          <Paginator
            totalEvents={totalEvents}
            eventsPerPage={eventsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
