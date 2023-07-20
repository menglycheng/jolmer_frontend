import {
  EnvelopeIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <div className="px-5 py-10 max-w-screen-xl mx-auto mt-10">
      <Head>
        <title>About us | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <div className="flex justify-between lg:space-x-72 space-x-10">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-primary-lowBlack">
            About Us
          </h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-10 mt-2"></div>
          <p className="max-w-xl font-medium mt-5 text-sm md:text-base lg:text-lg">
            Jolmer, created by a group of seniors in Kirirom Institute of
            Technology, is an informative website for enthusiastic students and
            youngsters who are eager to find challenges and competitions as well
            as volunteering activities. We also provide for organizations to
            post information and announcements of the competitions and events.
            Jolmer encourages khmer youths to be active in social activities and
            networking to promote inclusion and a sense of community.
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
          <h1 className="font-bold text-2xl md:text-3xl text-primary-lowBlack">
            Vision
          </h1>
        </div>
        <p className="font-medium mt-4 max-w-xs text-sm md:max-w-lg md:text-base lg:text-lg">
          <span className="text-primary-yellow font-bold">“</span> Jolmer
          provides a safe space for both youths and organizations to communicate
          and connect. We hope to increase the bon of khmer youths and the
          cambodian society and community as they are the future of cambodia.{" "}
          <span className="text-primary-yellow font-bold">”</span>
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-center space-x-2 justify-end">
          <h1 className="font-bold text-2xl md:text-3xl text-primary-lowBlack">
            Mission
          </h1>
          <div className="h-[4px] rounded-full bg-primary-blue w-5"></div>
        </div>
        <div className="flex items-center space-x-2 justify-end">
          <p className="font-medium mt-4 text-end max-w-xs md:max-w-lg text-sm md:text-base lg:text-lg ">
            <span className="text-primary-yellow font-bold">“</span> Jolmer aims
            to become a social networking platform where cambodian youths engage
            in national activities and competitions.{" "}
            <span className="text-primary-yellow font-bold">”</span>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="h-[4px] rounded-full bg-primary-blue w-20"></div>
          <h1 className="font-bold text-2xl md:text-3xl">Be our partner</h1>
          <div className="flex items-center space-x-2">
            <button className="rounded-full border-2 border-primary-blue">
              <PhoneIcon className="p-1 w-7 h-7 text-primary-blue" />
            </button>
            <button className="rounded-full border-2 border-primary-blue">
              <EnvelopeIcon className="p-1 w-7 h-7 text-primary-blue" />
            </button>
            <button className="rounded-full border-2 border-primary-blue">
              <UserGroupIcon className="p-1 w-7 h-7 text-primary-blue" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
