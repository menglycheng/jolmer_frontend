import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import React from "react";
import { be_organizer_validation } from "../../../lib/validation";
import { useRecoilState } from "recoil";
import { userRegisterState } from "../../../recoil/register/atom";
import { registerApi } from "@/axios/auth/registerApi";
import { useRouter } from "next/router";


const RegisterBeOrganizerTab = () => {
  const [userRegister, setUserRegister] = useRecoilState(userRegisterState);
  const router = useRouter();
  const [error, setError] = React.useState(null);


  const formik = useFormik({
    initialValues: {
      organization_name: "",
      organization_facebook: "",
      organization_email: "",
    },
    validate: be_organizer_validation,
    onSubmit,
  });

  async function onSubmit(values) {
    const userRegisterData = {   
      ...userRegister,
      organizer: {  
        name : values.organization_name,
        facebook_url : values.organization_facebook,
        email : values.organization_email,
      }
    };
    try {
      console.log(userRegisterData);
      const response = await registerApi(userRegisterData);
      console.log(response);

      if (response.status === 201) {
        // Redirect to login page
        router.push("/login");
      }
    } catch (error) {
      console.log("Error", error);
      setError(error.response.data.error);
      throw error;
    }
    
  }

  return (
    <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
      <div className="flex flex-col items-center  space-y-4">
        <BuildingOfficeIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-2" />
        <p className="font-bold text-xl md:text-2xl lg:text-3xl">
          Become an organizer
        </p>
        <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg pb-3">
          Please provide your organizer info
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col text-base">
          <p className="font-bold text-sm">Organization name *</p>
          <input
            type="text"
            name="organization_name"
            placeholder="Enter your organization name"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("organization_name")}
          ></input>
          {formik.errors.organization_name &&
          formik.touched.organization_name ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.organization_name}
            </span>
          ) : (
            <></>
          )}
          <p className="font-bold text-sm">Facebook page *</p>
          <input
            type="text"
            name="organization_facebook"
            placeholder="Enter your organization Facebook name"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("organization_facebook")}
          ></input>
          {formik.errors.organization_facebook &&
          formik.touched.organization_facebook ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.organization_facebook}
            </span>
          ) : (
            <></>
          )}
          <p className="font-bold text-sm">Organization email *</p>
          <input
            type="email"
            name="organization_email"
            placeholder="Enter your organizatin email"
            className="bg-white text-black py-2 pl-3 rounded-md border border-1 my-1 mb-4 border-primary-lowRed text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96"
            {...formik.getFieldProps("organization_email")}
          ></input>
          {formik.errors.organization_email &&
          formik.touched.organization_email ? (
            <span className=" text-red-700 font-bold">
              {formik.errors.organization_email}
            </span>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterBeOrganizerTab;
