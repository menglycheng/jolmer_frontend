import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BriefcaseIcon,
  UserIcon,
  BuildingOfficeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import EditProfile from "@/components/EditProfile";
import BecomeOrganizer from "@/components/BecomeOrganizer";
import { getEventUser } from "./api/Profile";
import CardSkeleton from "@/components/Homepage/CardSkeleton";
import Card from "@/components/Card";
import { useAuth } from "@/auth/auth";
import PrivateRoute from "@/components/Auth/PrivateRoute";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const profile = () => {
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editOrganizerOpen, setEditOrganizerOpen] = useState(false);
  const { user } = useAuth();
  const [EventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFavoriteActive, setIsFavoriteActive] = useState(true);
  const [isMyPostActive, setIsMyPostActive] = useState(false);
  // console.log(user);
  const { logout } = useAuth();

  useEffect(() => {
    if (isMyPostActive) {
      fetchEvent();
    }
  }, [isMyPostActive]);

  async function fetchEvent() {
    try {
      const data = await getEventUser(user.username);
      setEventData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  // console.log(loading);
  const toggleProfileModal = () => {
    setEditProfileOpen(!editProfileOpen);
  };

  const toggleOrganizerModal = () => {
    setEditOrganizerOpen(!editOrganizerOpen);
  };

  const handleFavoriteButtonClick = () => {
    setIsFavoriteActive(true);
    setIsMyPostActive(false);
  };

  const handleMyPostButtonClick = () => {
    setIsMyPostActive(true);
    setIsFavoriteActive(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <PrivateRoute>
      {user ? (
        <div className="md:px-5 max-w-screen-xl mx-auto z-20 ">
          <div className="relative bg-primary-lowBlack flex flex-col md:flex-row py-5 justify-center md:justify-between px-5 md:px-12">
            <div className="flex flex-col md:flex-row items-center space-x-5 space-y-2 md:space-y-0">
              <div className="w-36 h-36 rounded-full overflow-hidden border-[1px] border-primary-lowBlack bg-white">
                <Image
                  width={300}
                  height={300}
                  priority={false}
                  alt="profile"
                  src={user.profilePicture ?? "/profile.png"}
                  // src="/profile.png"
                  className="rounded-full w-36 h-36 object-cover"
                />
              </div>
              <div className="space-y-2 text-white flex flex-col items-center md:items-start">
                <h2 className="font-bold text-2xl lg:text-3xl">{user.name}</h2>
                <p className="font-semibold text-sm md:text-base max-w-sm text-primary-lowRed">
                  {user.description}
                </p>
                <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-1">
                  {user.organizer && (
                    <div className="flex items-center space-x-2">
                      <BuildingOfficeIcon className="icon" />
                      <p className="font-semibold text-sm md:text-base">
                        {user.organizer?.name}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <BriefcaseIcon className="icon" />
                    <p className="font-semibold text-sm md:text-base">
                      {user.affiliation}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserIcon className="icon" />
                    <p className="font-semibold text-sm md:text-base">
                      {user.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={handleLogout}
                className="flex space-x-1 justify-center items-center w-24 h-8 md:w-24 md:h-10 rounded-xl border-2 border-primary-blue text-white font-semibold text-sm hover:bg-primary-blue"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <p>Logout</p>
              </button>
            </div>
            <div className="flex items-end justify-end mt-5">
              <button
                onClick={toggleProfileModal}
                className="btn-hover2 w-24 h-8 md:w-28 md:h-10 rounded-2xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm md:text-base"
              >
                Edit Profile
              </button>
              {editProfileOpen && (
                <EditProfile toggleProfileModal={toggleProfileModal} />
              )}
            </div>
          </div>
          <div className="pt-10 px-5 md:px-12 ">
            <div className="flex md:flex-row md:justify-between md:items-center flex-col-reverse ">
              <div className="space-x-10 md:space-x-20">
                <button onClick={handleFavoriteButtonClick}>
                  <h1 className="font-semibold text-xl md:text-2xl text-primary-lowBlack">
                    Favorite
                  </h1>
                  {isFavoriteActive && (
                    <div className="h-[4px] rounded-full bg-primary-blue w-10 mt-2" />
                  )}
                </button>
                {user.organizer && (
                  <button onClick={handleMyPostButtonClick}>
                    <h1 className="font-semibold text-xl md:text-2xl text-primary-lowBlack">
                      My Post
                    </h1>
                    {isMyPostActive && (
                      <div className="h-[4px] rounded-full bg-primary-blue w-10 mt-2" />
                    )}
                  </button>
                )}
              </div>
              {!user.organizer && (
                <button
                  onClick={toggleOrganizerModal}
                  className="btn-hover2 flex items-center space-x-1 md:space-x-2 justify-center w-48 h-8 md:w-60 md:h-10 rounded-2xl text-sm md:text-base font-semibold border-primary-blue border-2 text-primary-blue mb-5 md:mb-0"
                >
                  <BuildingOfficeIcon className="icon" />
                  <p>Become an organizer</p>
                </button>
              )}
              {editOrganizerOpen && (
                <BecomeOrganizer toggleOrganizerModal={toggleOrganizerModal} />
              )}
            </div>
            {isMyPostActive ? (
              loading ? (
                <CardSkeleton />
              ) : error ? (
                <div className="h-screen">
                  <div className="flex justify-center items-center h-full">
                    <h1 className="text-4xl font-semibold">No Event</h1>
                  </div>
                </div>
              ) : (
                <Card data={EventData} />
              )
            ) : (
              <p>Favorite</p>
            )}
          </div>
        </div>
      ) : null}
    </PrivateRoute>
  );
};

export default profile;
