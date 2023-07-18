import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import EditDescription from "@/components/EditDescription";
import { postEvent } from "./api/Event";
import AlertMessage from "@/components/AlertMessage";
import { useAuth } from "@/auth/auth";
import PrivateRoute from "@/components/Auth/PrivateRoute";
import { useRouter } from "next/router";
import Head from "next/head";

const createEvent = () => {
  const { getAccessToken } = useAuth();
  const token = getAccessToken();
  const router = useRouter();
  const { user } = useAuth();

  const EventForm = {
    event_name: "",
    location: "",
    categorize: "COMPETITION",
    deadline: "",
    registerUrl: "",
    img: "",
    description: "",
    poster: "",
  };
  const [formEvent, setFormEvent] = useState(EventForm);
  const [formErrors, setFormErrors] = useState({});
  const [clearData, setClearData] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);

  const handleClearData = () => {
    setClearData(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormEvent((prevFormEvent) => ({
      ...prevFormEvent,
      [name]: value,
    }));

    // Validate the input and update the formErrors state
    if (value.trim() === "") {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: "This field is required.",
      }));
    } else {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        [name]: undefined,
      }));
    }
  };

  const handleDescriptionChange = (value) => {
    setFormEvent((prevFormEvent) => ({
      ...prevFormEvent,
      description: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setFormEvent((prevFormEvent) => ({
        ...prevFormEvent,
        img: imageDataUrl,
        poster: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    // Perform form validation
    const errors = {};

    if (!formEvent.event_name) {
      errors.event_name = "Event Name is required";
    }

    if (!formEvent.location) {
      errors.location = "Location is required";
    }

    if (!formEvent.deadline) {
      errors.deadline = "Deadline is required";
    }

    if (!formEvent.registerUrl) {
      errors.registerUrl = "Register Url is required";
    }

    if (!formEvent.img) {
      errors.img = "Poster is required";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop form submission if there are errors
    }

    // If there are no errors, continue with form submission

    const formData = new FormData();

    // Append form data fields
    formData.append("title", formEvent.event_name);
    formData.append("category", formEvent.categorize);
    formData.append("registerUrl", formEvent.registerUrl);
    formData.append("deadline", formEvent.deadline);
    formData.append("description", formEvent.description);
    formData.append("location", formEvent.location);
    formData.append("poster", formEvent.poster);

    try {
      const response = await postEvent(formData, token);
      console.log("Event created:", response);
      // Reset the form after successful creation
      setFormEvent(EventForm);
      handleClearData();
      setMessageAlert(true);

      setTimeout(() => {
        setMessageAlert(false);
      }, 7000);
      router.push("/profile");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleCancel = () => {
    setFormEvent(EventForm);
  };

  const handleDismiss = () => {
    setMessageAlert(false);
  };

  return (
    <PrivateRoute>
      <Head>
        <title>Create event | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      {user.organizer && (
        <div className="md:px-5 max-w-screen-xl mx-auto z-20 ">
          <div className="bg-primary-lowBlack relative pb-[20%] md:pb-[10%]">
            <h1 className="text-white font-bold text-xl md:text-2xl top-[35%] left-10 absolute">
              Create Event
            </h1>
          </div>
          {/* General Information */}
          <div className="px-5">
            <div className="bg-primary-box bg-opacity-50 shadow drop-shadow-sm rounded-lg mt-5">
              <h1 className="font-bold text-xl md:text-2xl text-primary-lowBlack py-2 px-5 md:px-10">
                General Information
              </h1>
              <div className="w-full h-[1px] bg-primary-lowBlack opacity-20" />
              <div className="grid md:grid-cols-2 py-4 px-5 md:px-10">
                <div className="space-y-4 text-sm md:text-base font-semibold">
                  <div className="space-y-2">
                    <label htmlFor="event_name">Event Name</label>
                    <div>
                      <input
                        className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                        type="text"
                        id="event_name"
                        name="event_name"
                        value={formEvent.event_name}
                        onChange={handleChange}
                      />
                    </div>
                    {formErrors.event_name && (
                      <p className="text-red-500 text-xs">
                        {formErrors.event_name}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label htmlFor="location">Location</label>
                      <div>
                        <input
                          className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                          type="text"
                          id="location"
                          name="location"
                          value={formEvent.location}
                          onChange={handleChange}
                        />
                      </div>
                      {formErrors.location && (
                        <p className="text-red-500 text-xs">
                          {formErrors.location}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="categorize">Categorize</label>
                      <div>
                        <select
                          className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent bg-primary-input shadow px-2 py-1"
                          id="categorize"
                          name="categorize"
                          value={formEvent.categorize}
                          onChange={handleChange}
                        >
                          <option value="COMPETITION">Competition</option>
                          <option value="VOLUNTEER">Volunteer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label htmlFor="deadline">Deadline</label>
                      <div>
                        <input
                          className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                          type="date"
                          id="deadline"
                          name="deadline"
                          value={formEvent.deadline}
                          onChange={handleChange}
                        />
                      </div>
                      {formErrors.deadline && (
                        <p className="text-red-500 text-xs">
                          {formErrors.deadline}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="time">Register Url</label>
                      <div>
                        <input
                          className="w-full rounded-sm font-light text-sm md:text-base focus:bg-transparent  bg-primary-input shadow px-2 py-1"
                          type="text"
                          id="registerUrl"
                          name="registerUrl"
                          value={formEvent.registerUrl}
                          onChange={handleChange}
                        />
                      </div>
                      {formErrors.registerUrl && (
                        <p className="text-red-500 text-xs">
                          {formErrors.registerUrl}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="rounded-sm bg-transparent py-5 md:pl-10 lg:pl-20">
                  <div className="bg-primary-input rounded-lg p-5 w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="relative flex flex-col items-center justify-center md:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary-input hover:bg-primary-box"
                    >
                      {formEvent.img ? (
                        <img
                          src={formEvent.img}
                          alt="Preview"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <PlusIcon className="text-primary-lowBlack w-[20%] md:w-[30%] opacity-50" />
                        </div>
                      )}
                    </label>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  {formErrors.img && (
                    <p className="text-red-500 text-base font-semibold mt-2">
                      {formErrors.img}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="bg-primary-box bg-opacity-50 shadow drop-shadow-sm rounded-lg mt-5">
              <h1 className="font-bold text-xl md:text-2xl text-primary-lowBlack py-2 px-5 md:px-10">
                Description
              </h1>
              <div className="w-full h-[1px] bg-primary-lowBlack opacity-20" />
              <div className="px-5 md:px-10 py-5 ">
                <div className="bg-primary-input rounded-lg">
                  <EditDescription
                    value={formEvent.description}
                    onChange={handleDescriptionChange}
                    clearData={clearData}
                  />
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="mt-10 space-x-2 flex justify-end">
              <button
                onClick={handleCancel}
                className="btn-hover2 w-16 h-8 md:w-36 rounded-xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                className="w-16 h-8 md:w-36 rounded-xl bg-primary-blue text-white border-2 border-primary-blue font-semibold text-sm hover:text-primary-blue hover:bg-white"
              >
                Create
              </button>
            </div>
          </div>
          {messageAlert && <AlertMessage onDismiss={handleDismiss} />}
        </div>
      )}
    </PrivateRoute>
  );
};

export default createEvent;
