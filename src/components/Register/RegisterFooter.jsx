import React from "react";
import { useRecoilValue } from "recoil";
import { activeTabState } from "../../../recoil/register/atom";

const RegisterFooter = () => {
  const activeTab = useRecoilValue(activeTabState);
  return (
    <div className="absolute bottom-1  flex space-x-3 items-center left-1/2 transform -translate-x-1/2">
      <div
        className={`${
          activeTab === "userDetailTab" ? "w-16 smmxs:w-12" : "w-3 smmxs:w-2"
        } h-3 smmxs:h-2 bg-primary-blue rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "choosePasswordTab"
            ? "w-16 smmxs:w-12"
            : "w-3 smmxs:w-2"
        } h-3 smmxs:h-2 bg-primary-blue  rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "beOrganizerTab" ? "w-16 smmxs:w-12" : "w-3 smmxs:w-2"
        } h-3 smmxs:h-2 bg-primary-blue rounded-full transition-width duration-700`}
      ></div>
    </div>
  );
};

export default RegisterFooter;
