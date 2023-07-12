import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isRegisterPage = router.pathname === "/register";
  const isForgotPassword = router.pathname === "/forgetPassword";
  const isChangePassword = router.pathname === "/changePassword";
  const isEmailVerification = router.pathname === "/emailVerification";
  const isEmailVerified = router.pathname === "/emailVerified";

  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <div className="flex flex-col min-h-screen">
          {!isLoginPage && 
          !isRegisterPage && 
          !isForgotPassword && 
          !isChangePassword &&
          !isEmailVerification &&
          !isEmailVerified ? <Navbar /> : null}
          <div className="flex-grow">
            <div className="h-full">
              <Component {...pageProps} />
            </div>
          </div>
          {!isLoginPage && 
           !isRegisterPage && 
           !isForgotPassword && 
           !isChangePassword &&
           !isEmailVerification &&
           !isEmailVerified && <Footer />}
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
}
