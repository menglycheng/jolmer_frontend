import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { login_validate } from "../../lib/validation";
import { useRouter } from "next/router";
import { loginApi } from "@/axios/auth/loginApi";
import { useAuth } from "@/auth/auth";
import GuestRoute from "@/components/Auth/GuestRoute";
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from "@/constants";
import Head from "next/head";

const Login = () => {
  const router = useRouter();
  const oauth2Error = router.query.error;
  const [error, setError] = useState(oauth2Error);
  const { login, loading } = useAuth();

  // Remove the error query parameter from the URL
  useEffect(() => {
    if (error) {
      const newUrl = window.location.pathname;
      router.replace(newUrl);
    }
  }, [error]);

  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  //Login email and password handle
  async function onSubmit(values) {
    //console.log(values);
    try {
      const response = await loginApi(values);
      const data = response.data;

      if (data) {
        // save login data to AuthContext
        login(data.accessToken, data.refreshToken, data.user);
      }
    } catch (error) {
      // console.log("Error", error.response.data);
      setError(error.response.data.error);
      throw error;
    }
  }

  return (
    <GuestRoute>
      <div>
        <Head>
          <title>Login | Jolmer</title>
          <link rel="icon" href="/icon/icon.png" />
        </Head>
        <NavbarLoginRegister />
        <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
          <div className="flex flex-col items-center space-y-4">
            <FaceSmileIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
            <p className="font-bold text-xl md:text-2xl lg:text-3xl">
              Welcome Back
            </p>
            <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg">
              Please enter your name and email
            </p>
            <div className="flex flex-col text-base">
              <a
                href={GOOGLE_AUTH_URL}
                className="bg-white text-black py-2 rounded-md border border-1 my-3 font-bold border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center space-x-2 items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-gray-200"
              >
                <img
                  src="/google.png"
                  alt="google"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
                <p>Login with Google</p>
              </a>
              <a
                href={FACEBOOK_AUTH_URL}
                className="bg-primary-blue text-white py-2 rounded-md border border-1 my-3 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center space-x-2 items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 "
              >
                <img
                  src="/Facebook.png"
                  alt="facebook"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
                <p>Login with Facebook</p>
              </a>

              <div className="flex items-center py-6 pb-10">
                <hr className="border-t border-primary-lowRed flex-grow" />
                <span className="text-black mx-4">OR</span>
                <hr className="border-t border-primary-lowRed flex-grow" />
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <p className="font-bold text-sm">Email *</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 "
                    //onChange={formik.handleChange}
                    //value={formik.values.email}
                    {...formik.getFieldProps("email")}
                  ></input>
                  {formik.errors.email && formik.touched.email ? (
                    <span className=" text-red-500 font-bold">
                      {formik.errors.email}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="mb-4">
                  <p className="font-bold text-sm">Password *</p>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
                    //onChange={formik.handleChange}
                    //value={formik.values.password}
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

                <div className="flex justify-between">
                  <label className=" flex items-center  text-primary-lowRed text-[10px] md:text-sm">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-500 mr-2"
                      name="remember"
                    />
                    Remember for 30 days
                  </label>
                  <a
                    href="#"
                    className=" text-primary-blue text-[10px] md:text-sm"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500"
                >
                  {loading && (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  )}
                  <>{loading ? "Logging in..." : "Login"}</>
                </button>
                {error && (
                  <div className="flex items-center justify-center text-xs md:text-sm text-red-500 font-bold mb-3 ">
                    <p className="text-center smxx:w-60 md:w-80 lg:w-96">
                      {error}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-center text-xs md:text-sm ">
                  <p className="mr-3 text-primary-lowRed">
                    Not registered yet?
                  </p>
                  <Link className="text-primary-blue" href="/register">
                    Create an account?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </GuestRoute>
  );
};

export default Login;
