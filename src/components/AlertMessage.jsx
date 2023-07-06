import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const AlertMessage = ({ onDismiss }) => {
  return (
    <aside class="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-primary-lowBlack px-5 py-3 text-white">
      <p class="text-sm font-medium hover:opacity-75">Event Created 👋</p>

      <button
        onClick={onDismiss}
        class="rounded bg-white/20 p-1 hover:bg-white/10"
      >
        <span class="sr-only">Close</span>
        <XMarkIcon className="icon" />
      </button>
    </aside>
  );
};

export default AlertMessage;
