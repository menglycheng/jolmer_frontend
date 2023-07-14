import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "@/auth/auth";
import MainLayout from "@/components/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </RecoilRoot>
  );
}
