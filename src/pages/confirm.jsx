import { confirmEmailApi } from "@/axios/auth/confirmEmailApi";
import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import {
  CheckCircleIcon,
  EnvelopeOpenIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const EmailVerified = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto verify email by post the token from url to backend
  useEffect(() => {
    const token = router.query.token;

    const verifyEmail = async () => {
      try {
        const response = await confirmEmailApi(token);
        if (response) {
          setIsVerified(true);
        }
      } catch (error) {
        setError(error.response.data.error);
        console.log(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [router.query.token]);

  const handleResendEmailOrLogin = () => {
    if (!isVerified) {
      // Redirect to resend email page
      router.push("/resend-email");
    } else {
      // Redirect to login page
      router.push("/login");
    }
  };

  return (
    <div>
      <Head>
        <title>Confirm | Jolmer</title>
        <link rel="icon" href="/icon/icon.png" />
      </Head>
      <NavbarLoginRegister />
      <div className="px-5 py-0 max-w-screen-xl mx-auto mt-10 mb-6">
        <div className="flex flex-col items-center  space-y-4 sp">
          <EnvelopeOpenIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-1" />

          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary-blue"></div>
            ) : isVerified ? (
              <CheckCircleIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-1" />
            ) : (
              <XCircleIcon className="w-10 h-10 border border-primary-lowOrange rounded-lg p-1" />
            )}
            <p
              className={`font-bold text-xl md:text-2xl lg:text-3xl ${
                loading
                  ? "text-primary-blue"
                  : isVerified
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {loading
                ? "Verifying..."
                : isVerified
                ? "Email verified!"
                : "Verification failed!"}
            </p>
          </div>
          <p className="font-light text-primary-lowRed text-sm md:text-base lg:text-lg text-center">
            {loading
              ? "Please wait..."
              : isVerified
              ? "You may proceed to login now."
              : error}
          </p>

          <br />
          <br />
          <button
            onClick={handleResendEmailOrLogin}
            className=" bg-primary-blue text-white py-2 rounded-md border border-1 my-5 font-bold 
                border-primary-blue text-xs md:text-sm lg:text-base flex justify-center items-center w-72 
                smxx:w-60 md:w-80 lg:w-96 hover:bg-blue-500 "
          >
            {isVerified ? "Go to login" : "Resend email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
