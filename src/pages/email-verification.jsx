import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import { EnvelopeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRecoilValue } from "recoil";
// import { userRegisterState } from "../../recoil/register/atom";
import { userRegisterState } from "@/recoil/register/atom";
import { useRouter } from "next/router";
import Head from "next/head";

const EmailVerification = () => {
  const userRegister = useRecoilValue(userRegisterState);
  const router = useRouter();

  return (
    <div>
      <NavbarLoginRegister />
      <Head>
        <title>Email verification | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 ">
          <EnvelopeIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-1" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Email verification
          </p>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg text-center">
            We have sent an email to
            <span className="font-bold text-primary-blue">
              {" "}
              {userRegister.email}{" "}
            </span>
            to confirm the validity of the email address. <br></br>
            Simply click the confirmation button to complete the process.
          </p>

          <br />
          <br />
          <button
            type="submit"
            className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 "
          >
            Resend
          </button>

          <div
            onClick={() => router.push("/login")}
            class="flex items-center cursor-pointer space-x-2"
          >
            <ChevronLeftIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
            <p>Back to Login </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
