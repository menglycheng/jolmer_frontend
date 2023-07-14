import React, { useState } from "react";
import { EyeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./Homepage/CountDown";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteEvent } from "@/pages/api/Event";
import { useAuth } from "@/auth/auth";

const Card = ({ data }) => {
  const currentDate = new Date();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleDeleteClick = (event, itemId) => {
    event.preventDefault();
    setConfirmDelete(true);
    setDeleteItemId(itemId);
  };

  const handleDeleteConfirm = async () => {
    try {
      setIsLoading(true);
      await deleteEvent(deleteItemId);
      // Handle success, such as removing the event from the state
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
    console.log("Deleting item:", deleteItemId);

    // After successful deletion, you can clear the delete confirmation state
    setConfirmDelete(false);
    setDeleteItemId(null);
    window.location.reload(true);
  };

  const handleDeleteCancel = () => {
    setConfirmDelete(false);
    setDeleteItemId(null);
  };

  return (
    <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-6 place-content-center mt-20">
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/details/${item.id}`}
          class="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md"
        >
          <div class="relative">
            <Image
              width={300}
              height={300}
              class="rounded-t-lg w-full bg-black h-52 object-cover"
              src={item.poster}
              alt="Poster"
            />
            <p class="text-[10px] bg-primary-yellow absolute top-2 left-2 rounded-full px-1 py-0.5 font-semibold">
              {item.category}
            </p>
            {item.user.email === user.email && (
              <button
                onClick={(event) => handleDeleteClick(event, item.id)}
                disabled={isLoading}
                className="absolute top-2 right-2 bg-red-500 rounded-lg p-1 hover:scale-110"
              >
                <TrashIcon className="h-5 w-5 text-white" />
              </button>
            )}
          </div>

          <div class="px-5 py-3">
            <h5 class="mb-2 text-2xl text-center font-bold truncate max-w-xs">
              {item.title}
            </h5>
            <p class="py-3 mb-3 flex justify-center flex-grow">
              {new Date(item.deadline) < currentDate ? (
                <span className="text-red-400 font-semibold text-3xl py-3">
                  Event Expired
                </span>
              ) : (
                <CountdownTimer deadline={item.deadline} />
              )}
            </p>

            <div class="flex items-center text-sm justify-between space-x-2">
              <div className="flex items-center space-x-1">
                <MapPinIcon className="icon" />
                <p>{item.location}</p>
              </div>
              <div className="flex items-center space-x-1">
                <EyeIcon className="icon" />
                <p>{item.views}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {/* Confirm Delete Dialog */}
      {confirmDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-5 rounded-md">
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
