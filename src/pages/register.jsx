import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import RegisterLeftBar from "@/components/Register/RegisterLeftBar";
import RegisterRightBar from "@/components/Register/RegisterRightBar";
import React from "react";

const register = () => {
  return (
    <div>
      <main className="flex w-full h-screen">
        <RegisterLeftBar />
        <RegisterRightBar />
      </main>
    </div>
  );
};

export default register;
