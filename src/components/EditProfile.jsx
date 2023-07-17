import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { updateProfile } from "@/pages/api/Profile";
import { useAuth } from "@/auth/auth";

const EditProfile = ({ toggleProfileModal }) => {
  const { user, getAccessToken } = useAuth();
  const token = getAccessToken();

  const initialProfile = {
    img: user.profilePicture,
    name: user.name,
    bio: user.description,
    role: user.affiliation,
    gender: user.gender,
    organization: user.organizer,
  };

  const [profile, setProfile] = useState(initialProfile);
  const [formProfile, setFormProfile] = useState(initialProfile);

  useEffect(() => {
    setFormProfile(profile);
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProfile((prevFormProfile) => ({
      ...prevFormProfile,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();

    // Append form data fields
    formData.append("name", formProfile.name);
    formData.append("description", formProfile.bio);
    formData.append("affiliation", formProfile.role);
    formData.append("gender", formProfile.gender);

    // Check if a new image file was selected
    if (formProfile.img instanceof File) {
      formData.append("ProfilePicture", formProfile.img);
    } else if (typeof formProfile.img === "string") {
      // Convert data URL to a File object
      try {
        const response = await fetch(formProfile.img);
        if (!response.ok) {
          throw new Error("Failed to fetch the image.");
        }

        const blob = await response.blob();
        const file = new File([blob], "profile_picture");

        formData.append("ProfilePicture", file);
      } catch (error) {
        console.error("Error fetching or converting the image:", error);
      }
    }

    try {
      const response = await updateProfile(formData, token);
      console.log("User updated:", response);
      // Reset the form after successful creation
      setProfile(formProfile);
      console.log("Saved:", formProfile);
      handleClose();
      window.location.reload(true);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleCancel = () => {
    setFormProfile(profile);
    console.log("Cancelled");
    handleClose();
  };

  const handleClose = () => {
    toggleProfileModal();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setFormProfile((prevFormEvent) => ({
        ...prevFormEvent,
        img: imageDataUrl,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Modal
        isOpen={toggleProfileModal}
        onRequestClose={handleClose}
        ariaHideApp={false}
        className="flex items-center justify-center w-screen h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      >
        <div className="bg-white w-[80%] md:w-[45%] lg:w-[25%] rounded-xl py-5">
          <div className="flex items-center justify-between px-5 pb-5">
            <h2 className="font-bold text-primary-lowBlack text-sm md:text-lg">
              Edit Profile
            </h2>
            <button onClick={handleClose}>
              <XMarkIcon className="icon" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-primary-lowBlack w-full h-20"></div>
            <div className="absolute -bottom-4 left-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-[1px] border-primary-lowBlack bg-white">
                <Image
                  width={300}
                  height={300}
                  priority={false}
                  alt="profile"
                  src={formProfile.img ?? "/profile.png"}
                  // src="/profile.png"
                  className="rounded-full w-16 h-16 object-cover"
                />
              </div>
              <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-10 flex justify-center items-center">
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <PencilIcon className="w-2 h-2" />
                </label>
              </div>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>
          <div className="px-5 mt-10 space-y-3">
            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Name
              </label>
              <div>
                <input
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formProfile.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="bio">
                Description
              </label>
              <div>
                <textarea
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input"
                  id="bio"
                  name="bio"
                  value={formProfile.bio}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formProfile.organization && (
              <div className="bg-primary-input rounded-lg p-2 px-4">
                <label
                  className="block text-sm font-medium text-primary-lowBrown"
                  htmlFor="role"
                >
                  Organization
                </label>
                <div>
                  <input
                    className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input text-primary-lowBrown"
                    type="text"
                    id="name"
                    name="name"
                    disabled
                    value={formProfile.organization?.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="role">
                Position
              </label>
              <div>
                <select
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input"
                  id="role"
                  name="role"
                  value={formProfile.role}
                  onChange={handleChange}
                >
                  <option value="" className="text-primary-lowBlack">
                    plese select...
                  </option>
                  <option value="STUDENT">Student</option>
                  <option value="TEACHER">Teacher</option>
                  <option value="PARENT">Parent</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>
            <div className="bg-primary-input rounded-lg p-2 px-4">
              <label className="block text-sm font-medium" htmlFor="gender">
                Gender
              </label>
              <div>
                <select
                  className="w-full font-semibold md:text-lg text-base focus:bg-transparent focus:outline-none bg-primary-input"
                  id="gender"
                  name="gender"
                  value={formProfile.gender}
                  onChange={handleChange}
                >
                  <option value="" className="text-primary-lowBlack">
                    plese select...
                  </option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
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
    </div>
  );
};

export default EditProfile;
