import GuestRoute from "@/components/Auth/GuestRoute";
import RegisterLeftBar from "@/components/Register/RegisterLeftBar";
import RegisterRightBar from "@/components/Register/RegisterRightBar";
import React from "react";

const register = () => {
  return (
    <GuestRoute>
      <div>
        <main className="flex w-full h-screen">
          <RegisterLeftBar />
          <RegisterRightBar />
        </main>
      </div>
    </GuestRoute>
  );
};

export default register;
