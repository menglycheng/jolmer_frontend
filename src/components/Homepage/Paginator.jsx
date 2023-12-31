import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Pagination({
  totalEvents,
  eventsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const next = () => {
    if (currentPage === totalPages) return;
    onPageChange(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className={`border rounded-md px-3 py-2 focus:outline-none ${
          currentPage === 1
            ? "text-primary-lowBrown"
            : "text-pribg-primary-blue"
        }`}
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="icon" />
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`border rounded-full w-10 h-10 flex items-center justify-center focus:outline-none ${
                currentPage === page
                  ? "bg-primary-blue text-white"
                  : "text-primary-blue"
              }`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          )
        )}
      </div>
      <button
        className={`border rounded-md px-3 py-2 focus:outline-none ${
          currentPage === totalPages
            ? "text-primary-lowBrown"
            : "text-pribg-primary-blue"
        }`}
        onClick={next}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="icon" />
      </button>
    </div>
  );
}
