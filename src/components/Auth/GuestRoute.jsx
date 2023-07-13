import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/auth/auth";
import LoadingPage from "../LoadingPage";

export default function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/"); // Redirect to the home page or any other relevant page
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated()) {
    return <LoadingPage />; // Show LoadingPage until redirect happens
  }

  return <>{children}</>;
}
