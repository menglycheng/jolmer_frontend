import { useRouter } from "next/router";
import { useAuth } from "@/auth/auth";
import { useEffect } from "react";
import LoadingPage from "../LoadingPage";

export default function PrivateRoute({ children }) {
  const { loading, isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      console.log("not authenticated");
      router.replace("/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !user) {
    // Display a loading spinner here while checking the authentication status
    return <LoadingPage />;
  }

  return <>{children}</>;
}
