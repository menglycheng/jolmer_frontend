import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function LoadingPage() {
  return (
    <div className="bg-white flex justify-center items-center fixed inset-0 z-50">
      <Link href="/" className="flex items-center space-x-2 text-primary-blue">
        <FaceSmileIcon className="w-9 h-9" />
        <p className="font-bold text-lg md:text-xl">Jolmer</p>
      </Link>
    </div>
  );
}

export default LoadingPage;
