import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import EditDescription from "@/components/EditDescription";

const createEvent = () => {
  return (
    <div>
      <div className="md:px-5 max-w-screen-xl mx-auto z-20 ">
        <div className="bg-primary-lowBlack relative pb-[20%] md:pb-[10%]">
          <h1 className="text-white font-bold text-xl md:text-2xl top-[35%] left-10 absolute">
            Create Event
          </h1>
        </div>
        {/* General Information */}
        <div className="px-5">
          <div className="bg-primary-box bg-opacity-50 shadow drop-shadow-sm rounded-lg mt-5">
            <h1 className="font-bold text-xl md:text-2xl text-primary-lowBlack py-2 px-5 md:px-10">
              General Information
            </h1>
            <div className="w-full h-[1px] bg-primary-lowBlack opacity-20" />
            <div className="grid md:grid-cols-2 py-4 px-5 md:px-10">
              <div className="space-y-4 text-sm md:text-base font-semibold">
                <div className="space-y-2">
                  <label htmlFor="event_name">Event Name</label>
                  <div>
                    <input
                      className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                      type="text"
                      id="event_name"
                      name="event_name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="location">Location</label>
                    <div>
                      <input
                        className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                        type="text"
                        id="location"
                        name="location"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="categorize">Categorize</label>
                    <div>
                      <select
                        className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                        id="categorize"
                        name="categorize"
                      >
                        <option value="Male">Competition</option>
                        <option value="Female">Volunteer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="deadline">Deadline</label>
                    <div>
                      <input
                        className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                        type="date"
                        id="deadline"
                        name="deadline"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time">Time</label>
                    <div>
                      <input
                        className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                        type="text"
                        id="time"
                        name="time"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded-sm bg-transparent py-5 md:pl-10 lg:pl-20">
                <div className="bg-primary-input rounded-lg p-5 w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center md:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary-input hover:bg-primary-box"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <PlusIcon className="text-primary-lowBlack w-[20%] md:w-[30%] opacity-50" />
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="bg-primary-box bg-opacity-50 shadow drop-shadow-sm rounded-lg mt-5">
            <h1 className="font-bold text-xl md:text-2xl text-primary-lowBlack py-2 px-5 md:px-10">
              Description
            </h1>
            <div className="w-full h-[1px] bg-primary-lowBlack opacity-20" />
            <div className="px-5 md:px-10 py-5 ">
              <div className="bg-primary-input rounded-lg">
                <EditDescription />
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="mt-10 space-x-2 flex justify-end">
            <button className="btn-hover2 w-16 h-8 md:w-36 rounded-xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm">
              Discard
            </button>
            <button className="w-16 h-8 md:w-36 rounded-xl bg-primary-blue text-white border-2 border-primary-blue font-semibold text-sm hover:text-primary-blue hover:bg-white">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createEvent;
