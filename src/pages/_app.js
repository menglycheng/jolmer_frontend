import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/auth/auth";
import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <SessionProvider session={pageProps.session}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </SessionProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}
