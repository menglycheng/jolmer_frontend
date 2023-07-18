import GuestRoute from "@/components/Auth/GuestRoute";
import RegisterLeftBar from "@/components/Register/RegisterLeftBar";
import RegisterRightBar from "@/components/Register/RegisterRightBar";
import React from "react";
import Head from "next/head";
const register = () => {
  return (
    <GuestRoute>
      <div>
        <Head>
          <title>Register | Jolmer</title>
          <link rel="icon" href="/icon/icon.png" />
        </Head>
        <main className="flex w-full h-screen">
          <RegisterLeftBar />
          <RegisterRightBar />
        </main>
      </div>
    </GuestRoute>
  );
};

export default register;
