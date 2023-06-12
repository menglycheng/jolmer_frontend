import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Navbar />}
      <Component {...pageProps} />
      {!isLoginPage && <Footer />}
    </div>
  );
}
