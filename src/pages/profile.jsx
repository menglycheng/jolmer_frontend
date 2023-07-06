import React, { useState } from "react";
import Image from "next/image";
import {
  BriefcaseIcon,
  UserIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import Card from "@/components/Homepage/Card";
import { Data } from "../../utils/Data";
import EditProfile from "@/components/EditProfile";


const profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

import BecomeOrganizer from "@/components/BecomeOrganizer";

const profile = () => {
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editOrganizerOpen, setEditOrganizerOpen] = useState(false);

  const toggleProfileModal = () => {
    setEditProfileOpen(!editProfileOpen);
  };

  const toggleOrganizerModal = () => {
    setEditOrganizerOpen(!editOrganizerOpen);

  };

  return (
    <div>
      <div className="md:px-5 max-w-screen-xl mx-auto z-20 ">
        <div className="bg-primary-lowBlack flex flex-col md:flex-row py-5 justify-center md:justify-between px-5 md:px-12">
          <div className="flex flex-col md:flex-row items-center space-x-5 space-y-2 md:space-y-0">
            <Image
              width={300}
              height={300}
              priority={false}
              alt="profile"
              src="/profile.jpg"
              className="rounded-full w-36 h-36 object-cover"
            />
            <div className="space-y-2 text-white flex flex-col items-center md:items-start">
              <h2 className="font-bold text-2xl lg:text-3xl">Cheng Mengly</h2>
              <p className="font-semibold text-sm md:text-base max-w-sm text-primary-lowRed">
                Enthusiasm developer who passionate in AI and Machine Learning.
              </p>
              <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-1">
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="icon" />
                  <p className="font-semibold text-sm md:text-base">Student</p>
                </div>
                <div className="flex items-center space-x-2">
                  <UserIcon className="icon" />
                  <p className="font-semibold text-sm md:text-base">Male</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end mt-5">
            <button
              onClick={toggleModal}

              className="btn-hover2 w-24 h-8 md:w-28 md:h-10 rounded-2xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm md:text-base"
            >
              Edit Profile
            </button>
            {isModalOpen && <EditProfile toggleModal={toggleModal} />}
          </div>
        </div>
        <div className="pt-10 px-5 md:px-12 ">
          <div className="flex justify-between items-center">
            <button>
              <h1 className="font-semibold text-xl md:text-2xl text-primary-lowBlack">
                Favorite
              </h1>
              <div className="h-[4px] rounded-full bg-primary-blue w-10 mt-2" />
            </button>
            <button
              onClick={toggleOrganizerModal}
              className="btn-hover2 flex items-center space-x-1 md:space-x-2 justify-center w-48 h-8 md:w-60 md:h-10 rounded-2xl text-sm md:text-base font-semibold border-primary-blue border-2 text-primary-blue"
            >
              <BuildingOfficeIcon className="icon" />
              <p>Become an organizer</p>
            </button>
            {editOrganizerOpen && (
              <BecomeOrganizer toggleOrganizerModal={toggleOrganizerModal} />
            )}
          </div>
          <Card data={Data} />
        </div>
      </div>
    </div>
  );
};

export default profile;
