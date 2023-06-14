import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarLoginRegister from "@/components/NavbarLoginRegister";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";
  const isRegisterPage = router.pathname === "/register";

  return (
    <RecoilRoot>
      <div className="flex flex-col min-h-screen">
        {!isLoginPage && !isRegisterPage ? <Navbar /> : null}
        <Component {...pageProps} />
        {!isLoginPage && !isRegisterPage && <Footer />}
      </div>
    </RecoilRoot>
  );
}
