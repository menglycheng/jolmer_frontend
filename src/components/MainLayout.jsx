import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "@/auth/auth";
import LoadingPage from "./LoadingPage";

function MainLayout({ children }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isRegisterPage = router.pathname === "/register";
  const isForgotPassword = router.pathname === "/forgot-password";
  const isChangePassword = router.pathname === "/change-password";
  const isEmailVerification = router.pathname === "/email-verification";
  const isEmailVerified = router.pathname === "/confirm";
  const { loading } = useAuth();

  return (
    <>
      {!loading ? (
        <div className="flex flex-col min-h-screen">
          {!isLoginPage &&
          !isRegisterPage &&
          !isForgotPassword &&
          !isChangePassword &&
          !isEmailVerification &&
          !isEmailVerified ? (
            <Navbar />
          ) : null}
          <div className="flex-grow">
            <div className="h-full">{children}</div>
          </div>
          {!isLoginPage &&
            !isRegisterPage &&
            !isForgotPassword &&
            !isChangePassword &&
            !isEmailVerification &&
            !isEmailVerified && <Footer />}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default MainLayout;
