import React, { useState } from "react";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/outline";

const BecomeOrganizer = ({ toggleOrganizerModal }) => {
  const OrganizerForm = {
    name: "",
    email: "",
    facebook_url: "",
    instagram_url: "",
  };

  const [formEvent, setFormEvent] = useState(OrganizerForm);
  const [formErrors, setFormErrors] = useState({});

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

  const handleSave = async () => {
    // Perform form validation
    const errors = {};

    if (!formEvent.name) {
      errors.name = "Event Name is required";
    }

    if (!formEvent.email) {
      errors.email = "Email is required";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop form submission if there are errors
    }

    try {
      //   const response = await postEvent(eventData);
      //   console.log("Event created:", response);
      //   // Reset the form after successful creation
      setFormEvent(OrganizerForm);
      console.log("Saved:", formEvent);
      handleClose();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  //   console.log("Saved:", OrganizerForm);
  const handleCancel = () => {
    setFormEvent(OrganizerForm);
  };

  const handleClose = () => {
    toggleOrganizerModal();
  };

  return (
    <div>
      <Modal
        isOpen={toggleOrganizerModal}
        onRequestClose={handleClose}
        ariaHideApp={false}
        className="flex items-center justify-center w-screen h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
      >
        <div className="bg-white w-[80%] md:w-[45%] lg:w-[25%] rounded-xl py-5">
          <div className="flex items-center justify-between px-5 pb-5">
            <h2 className="font-bold text-primary-lowBlack text-sm md:text-lg">
              Become an Organizer
            </h2>
            <button onClick={handleClose}>
              <XMarkIcon className="icon" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-primary-lowBlack w-full h-20"></div>
          </div>
          <div className="px-5 mt-10 space-y-3">
            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Name
              </label>
              <div>
                <input
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input placeholder:text-sm"
                  type="text"
                  id="name"
                  name="name"
                  value={formEvent.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            {formErrors.name && (
              <p className="text-red-500 text-xs px-2">{formErrors.name}</p>
            )}

            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Email
              </label>
              <div>
                <input
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input placeholder:text-sm"
                  type="text"
                  id="email"
                  name="email"
                  value={formEvent.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            {formErrors.email && (
              <p className="text-red-500 text-xs px-2">{formErrors.email}</p>
            )}
            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Facebook URL
              </label>
              <div>
                <input
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input placeholder:text-sm"
                  type="text"
                  id="facebook_url"
                  name="facebook_url"
                  value={formEvent.facebook_url}
                  onChange={handleChange}
                  placeholder="Enter your facebook URL"
                />
              </div>
            </div>

            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Instagram URL.
              </label>
              <div>
                <input
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input placeholder:text-sm"
                  type="text"
                  id="instagram_url"
                  name="instagram_url"
                  value={formEvent.instagram_url}
                  onChange={handleChange}
                  placeholder="Enter your Instagram URL"
                />
              </div>
            </div>
          </div>
          <div className="mt-20 space-x-2 flex justify-end px-5">
            <button
              onClick={handleCancel}
              className="btn-hover2 w-16 h-8 md:w-20 rounded-xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn-hover2 w-16 h-8 md:w-20 rounded-xl bg-primary-blue text-white border-2 border-primary-blue font-semibold text-sm hover:text-primary-blue hover:bg-white"
            >
              save
            </button>
          </div>
        </div>
      </Modal>
      ;
    </div>
  );
};

export default BecomeOrganizer;
