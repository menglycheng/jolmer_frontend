import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const EditProfile = ({ toggleModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClose = () => {
    toggleModal();
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <div>
      <Modal
        isOpen={toggleModal}
        onRequestClose={handleClose}
        className="flex items-center justify-center w-screen h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70"
      >
        <div className="bg-white w-[60%] md:w-[40%] lg:w-[20%] rounded-xl py-5">
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
                  src={selectedImage || "/profile.jpg"}
                  alt="Profile"
                  className="object-cover"
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
            <div class="relative">
              <input
                type="text"
                class="peer m-0 block h-[58px] w-full rounded bg-primary-lowWhite  bg-clip-padding px-3 py-4 text-base font-semibold leading-tight text-primary-lowBlack transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                for="floatingInput"
                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary-lowBlack transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                type="text"
                class="peer m-0 block h-[58px] w-full rounded bg-primary-lowWhite  bg-clip-padding px-3 py-4 text-base font-semibold leading-tight text-primary-lowBlack transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                for="floatingInput"
                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary-lowBlack transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                type="text"
                class="peer m-0 block h-[58px] w-full rounded bg-primary-lowWhite  bg-clip-padding px-3 py-4 text-base font-semibold leading-tight text-primary-lowBlack transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                for="floatingInput"
                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary-lowBlack transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                type="text"
                class="peer m-0 block h-[58px] w-full rounded bg-primary-lowWhite  bg-clip-padding px-3 py-4 text-base font-semibold leading-tight text-primary-lowBlack transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                for="floatingInput"
                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary-lowBlack transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >
                Name
              </label>
            </div>
          </div>
          <div className="mt-20 space-x-2 flex justify-end px-5">
            <button
              onClick={handleClose}
              className="btn-hover2 w-16 h-8 md:w-20 rounded-xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleClose}
              className="btn-hover2 w-16 h-8 md:w-20 rounded-xl border-2 border-primary-blue bg-white text-primary-blue font-semibold text-sm"
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

export default EditProfile;
