import React from "react";
import { useRecoilValue } from "recoil";
import { activeTabState } from "../../../recoil/register/atom";
import RegisterBeOrganizerTab from "./RegisterBeOrganizerTab";
import RegisterChoosePasswordPage from "./RegisterChoosePasswordPage";
import RegisterFooter from "./RegisterFooter";
import RegisterUserDetailPage from "./RegisterUserDetailPage";

const RegisterRightBar = () => {
  const activeTab = useRecoilValue(activeTabState);

  const renderContent = () => {
    switch (activeTab) {
      case "userDetailTab":
        return <RegisterUserDetailPage />;
      case "choosePasswordTab":
        return <RegisterChoosePasswordPage />;
      case "beOrganizerTab":
        return <RegisterBeOrganizerTab />;
      default:
        return null;
    }
  };

  return (
    <div className="basis-4/6 relative flex items-center justify-center smx:basis-full ">
      {renderContent()}

      {/* Register Footer */}
      <RegisterFooter />
    </div>
  );
};

export default RegisterRightBar;
