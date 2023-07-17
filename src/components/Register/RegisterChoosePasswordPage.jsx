import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useFormik } from "formik";
import { choose_pass_validation } from "../../../lib/validation";
import { useRecoilState } from "recoil";
// import { activeTabState } from "../../../recoil/register/atom";
import { activeTabState } from "@/recoil/register/atom";
import { registerApi } from "@/axios/auth/registerApi";
// import { userRegisterState } from "../../../recoil/register/atom";
import { userRegisterState } from "@/recoil/register/atom";
import { useRouter } from "next/router";

const RegisterChoosePasswordPage = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [userRegister, setUserRegister] = useRecoilState(userRegisterState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // for loading button
  const router = useRouter();

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
    setUserRegister((userRegisterValues) => ({
      ...userRegisterValues,
      password: values.password,
    }));

    const userRegisterData = {
      ...userRegister,
      password: values.password,
    };

    if (values.submitButton === "organizer") {
      setActiveTab("beOrganizerTab");
    } else {
      try {
        setLoading(true);
        const response = await registerApi(userRegisterData);
        console.log(response);

        if (response.status === 201) {
          // Redirect to email-verfication page
          router.push("/email-verification");
        }
      } catch (error) {
        //console.log("Error", error);
        setError(error.response.data.email);
        //console.log(error.response.data);
        throw error;
      } finally {
        setLoading(false);
      }
    }
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
          <div className="mb-4">
            <p className="font-bold text-sm">Password *</p>
            <input
              type="password"
              name="password"
              placeholder="choose a password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
              {...formik.getFieldProps("password")}
            ></input>
            {formik.errors.password && formik.touched.password ? (
              <span className=" text-red-500 font-bold">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}
          </div>

          <div className="mb-4">
            <p className="font-bold text-sm">Confirm password *</p>
            <input
              type="password"
              name="conpassword"
              placeholder="confirm password"
              className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
              {...formik.getFieldProps("conpassword")}
            ></input>
            {formik.errors.conpassword && formik.touched.conpassword ? (
              <span className=" text-red-500 font-bold">
                {formik.errors.conpassword}
              </span>
            ) : (
              <></>
            )}
          </div>

          <button
            type="submit"
            value="continue"
            onClick={handleButtonClick}
            className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 space-x-4"
          >
            {loading && (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            )}
            <span>{loading ? "Registering..." : "Continue sign up"}</span>
          </button>

          {error && (
            <div className="flex items-center justify-center text-xs md:text-sm text-red-500 font-bold mb-3 ">
              <p>{error}</p>
            </div>
          )}
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
