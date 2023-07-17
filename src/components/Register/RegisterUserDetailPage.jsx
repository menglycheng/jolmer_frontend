import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { user_details_validate } from "../../../lib/validation";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";
// import { activeTabState } from "../../../recoil/register/atom";
import { activeTabState } from "@/recoil/register/atom";
// import { userRegisterState } from "../../../recoil/register/atom";
import { userRegisterState } from "@/recoil/register/atom";

const RegisterUserDetailPage = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [userRegister, setUserRegister] = useRecoilState(userRegisterState);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validate: user_details_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    setActiveTab("choosePasswordTab");
    setUserRegister({
      ...userRegister,
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
    });

    console.log(values);
  }

  return (
    <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
      <div className="flex flex-col items-center  space-y-4">
        <FaceSmileIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
        <p className="font-bold text-xl md:text-2xl lg:text-3xl">
          Your Details
        </p>
        <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg">
          Please provide your name and email
        </p>
      </div>
      <div className="flex flex-col text-base">
        <button
          type="button"
          className="bg-white text-black py-2 rounded-md border border-1 my-3 font-bold border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center space-x-2 items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-gray-200"
        >
          <img
            src="/google.png"
            alt="google"
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <p>Signup with Google</p>
        </button>
        <button
          type="button"
          className="bg-primary-blue text-white py-2 rounded-md border border-1 my-3 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center space-x-2 items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500"
        >
          <img
            src="/Facebook.png"
            alt="facebook"
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <p>Signup with Facebook</p>
        </button>

        <div className="flex items-center py-6 pb-10">
          <hr className="border-t border-primary-lowRed flex-grow" />
          <span className="text-black mx-4">OR</span>
          <hr className="border-t border-primary-lowRed flex-grow" />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <p className="font-bold text-sm">First name *</p>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 "
            {...formik.getFieldProps("firstname")}
          ></input>
          {formik.errors.firstname && formik.touched.firstname ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.firstname}
            </span>
          ) : (
            <></>
          )}
          <p className="font-bold text-sm">Last name *</p>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your lastname"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("lastname")}
          ></input>
          {formik.errors.lastname && formik.touched.lastname ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.lastname}
            </span>
          ) : (
            <></>
          )}

          <p className="font-bold text-sm">Email *</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("email")}
          ></input>
          {formik.errors.email && formik.touched.email ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserDetailPage;
