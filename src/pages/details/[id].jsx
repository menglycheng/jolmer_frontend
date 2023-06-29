import React from "react";
import Image from "next/image";
import { Data } from "../../../utils/Data";
import {
  BuildingOfficeIcon,
  EyeIcon,
  HeartIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/solid";

// const detail = ({ item }) => {
const detail = () => {
  return (
    <div>
      <div className="md:px-5 max-w-screen-xl mx-auto z-20 ">
        <div className="bg-primary-lowBlack relative pb-[30%] md:pb-[20%]">
          <img
            alt="profile"
            src="/SmartSpark8-Webinar.jpg"
            className="object-cover absolute top-0 left-0 w-full h-full"
          />
        </div>

        <div className="px-5">
          <div className="relative bg-primary-box bg-opacity-50 rounded-lg mt-5 flex flex-col md:flex-row py-5 justify-center md:justify-between px-5 md:px-12">
            <div className="flex flex-col md:flex-row items-center space-x-5 space-y-1 md:space-y-0 md:p-10">
              <Image
                width={300}
                height={300}
                priority={false}
                alt="profile"
                src="/download 1.png"
                className="rounded-lg w-28 h-28 md:w-36 md:h-36 object-cover"
              />
              <div className="space-y-2 flex flex-col items-center md:items-start text-primary-lowBlack">
                <h2 className="font-bold text-2xl lg:text-3xl">Smart Spark</h2>
                <div className="flex items-center space-x-2">
                  <BuildingOfficeIcon className="icon" />
                  <p className="text-sm md:text-base">ff</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="icon" />
                  <p className="text-sm md:text-base">ff</p>
                </div>
                <div className="flex items-center space-x-2">
                  <EyeIcon className="icon" />
                  <p className="text-sm md:text-base">ff</p>
                </div>
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="icon" />
                  <p className="text-sm md:text-base">fff</p>
                </div>
              </div>
            </div>
            <div className="absolute top-5 right-5 hover:border-2  hover:text-primary-blue">
              <button className="border-2 border-primary-lowBlack hover:border-primary-blue rounded-lg p-1">
                <HeartIcon className="icon" />
              </button>
            </div>
            <div className="flex flex-col items-end justify-end mt-10 text-primary-lowBlack">
              <div className="flex items-center justify-between md:flex-col w-full md:space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="border-2 border-primary-lowBlack rounded-lg p-1">
                    <CalendarIcon className="icon" />
                  </div>
                  <div>
                    <p className="text-sm">Regisration Deadline</p>
                    <p className="font-bold">ff</p>
                  </div>
                </div>
                <button className="w-28 h-10 md:w-full rounded-xl border-2 bg-primary-blue text-white font-semibold text-sm md:text-base hover:border-2 hover:border-primary-blue hover:text-primary-blue hover:bg-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="relative bg-primary-box bg-opacity-50 rounded-lg mt-5 py-2 px-5 md:px-10">
            <p className="font-bold text-sm md:text-base text-primary-blue">
              Description
            </p>
            <div className="h-[4px] rounded-full bg-primary-blue w-12 mt-1"></div>
          </div>
        </div>
        <div className="px-5">
          <div className="relative bg-primary-box bg-opacity-50 rounded-lg mt-5 py-5 px-5 md:px-10">
            <h2 className="font-semibold text-xl md:text-2xl">Smart Spark</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Sem viverra nisl etiam
              condimentum at.Lorem ipsum dolor sit amel etiam condimentum at.
              Lorem ipsum dolor sit amet consectetur. Sem viverra nisl etiam
              condimentum at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps({ query }) {
//   const { id } = query;

//   // Find the item with the matching id in the Data array
//   const item = Data.find((item) => item.id === id);

//   if (!item) {
//     // If the item is not found, you can handle it as per your requirements
//     // For example, you can redirect the user to an error page or display a message
//     return {
//       redirect: {
//         destination: "/error", // Replace with your error page route
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       item,
//     },
//   };
// }

export default detail;
