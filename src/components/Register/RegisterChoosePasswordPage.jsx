import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useFormik } from "formik";
import { choose_pass_validation } from "../../../lib/validation";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../../recoil/register/atom";

const RegisterChoosePasswordPage = () => {
  
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      conpassword: "",
    },
    validate: choose_pass_validation,
    onSubmit,
  });

  async function onSubmit(values) {
    if (values.submitButton === "organizer") {
      setActiveTab("beOrganizerTab");
    }
    console.log(values);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    const buttonValue = e.target.value;
    formik.setFieldValue("submitButton", buttonValue);
    formik.handleSubmit(e);
  };

  return (
    <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
      <div className="flex flex-col items-center  space-y-4">
        <LockClosedIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
        <p className="font-bold text-xl md:text-2xl lg:text-3xl">
          Choose a Password
        </p>
        <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg pb-3">
          Must be at least 8 characters
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col text-base">
          <p className="font-bold text-sm">Password *</p>
          <input
            type="password"
            name="password"
            placeholder="choose a password"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("password")}
          ></input>
          {formik.errors.password && formik.touched.password ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}
          <p className="font-bold text-sm">Confirm password *</p>
          <input
            type="password"
            name="conpassword"
            placeholder="confirm password"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("conpassword")}
          ></input>
          {formik.errors.conpassword && formik.touched.conpassword ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.conpassword}
            </span>
          ) : (
            <></>
          )}
          <button
            type="submit"
            value="continue"
            onClick={handleButtonClick}
            className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500"
          >
            Continue sign up
          </button>
          <button
            type="submit"
            value="organizer"
            onClick={handleButtonClick}
            className=" text-primary-blue py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 btn-contin-hover"
          >
            Become an organizer?
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterChoosePasswordPage;
