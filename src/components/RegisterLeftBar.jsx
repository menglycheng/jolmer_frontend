import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const RegisterLeftBar = () => {
  return (
    <div>
      <header className="top-0 px-5 py-5 flex items-center justify-between max-w-screen-xl mx-auto z-20">
     <Link
          href="/"
          className="flex items-center space-x-2 text-primary-blue"
        >
          <FaceSmileIcon className="w-9 h-9" />
          <p className="font-bold text-xl">Jolmer</p>
        </Link>
        </header>
    </div>
  )
}

export default RegisterLeftBar
