import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../../recoil/register/atom";
import NavbarLoginRegister from "../NavbarLoginRegister";

const RegisterLeftBar = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  // const handleTabClick = tabName => {
  //   setActiveTab(tabName);
  // };

  // reset active tab to userDetailTab when page refresh
  useEffect(() => {
    setActiveTab("userDetailTab");
  }, []);

  return (
    <div className="basis-2/6 bg-primary-lowGray px-24  smx:hidden ">
      <NavbarLoginRegister />
      <div className="space-y-6 text-primary-lowRed mt-10">
        <button
          // onClick={() => handleTabClick("userDetailTab")}
          className="flex items-start space-x-3  hover:text-black"
        >
          <CheckCircleIcon className="w-6 h-6" />
          <div
            className={`flex flex-col ${
              activeTab === "userDetailTab" && "text-black"
            }`}
          >
            <p className="text-left text-base font-bold">Your Deatails</p>
            <p className="text-left text-sm">
              Please provide your name and email
            </p>
          </div>
        </button>
        <button
          // onClick={() => handleTabClick("choosePasswordTab")}
          className="flex items-start space-x-3  hover:text-black"
        >
          <CheckCircleIcon className="w-6 h-6" />
          <div
            className={`flex flex-col ${
              activeTab === "choosePasswordTab" && "text-black"
            }`}
          >
            <p className="text-left text-base font-bold">Choose a password</p>
            <p className="text-left text-sm">Must be at least 8 character</p>
          </div>
        </button>
        <button
          // onClick={() => handleTabClick("beOrganizerTab")}
          className="flex items-start space-x-3  hover:text-black"
        >
          <CheckCircleIcon className="w-6 h-6" />
          <div
            className={`flex flex-col ${
              activeTab === "beOrganizerTab" && "text-black"
            }`}
          >
            <p className="text-left text-base font-bold">Become an organizer</p>
            <p className="text-left text-sm">
              Please provider your organizer info
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RegisterLeftBar;
