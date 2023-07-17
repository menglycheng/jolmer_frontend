import { useRouter } from "next/router";
import { useAuth } from "@/auth/auth";
import { getUserProfileApi } from "@/axios/auth/getUserProfileApi";
import { useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";

function redirect() {
  const router = useRouter();
  const { login } = useAuth();

  const { accessToken, refreshToken, error } = router.query;

  useEffect(() => {
    // Get the user profile from the server
    const getUserProfile = async () => {
      try {
        const response = await getUserProfileApi(accessToken);
        const userData = await response.data;

        if (userData) {
          // Save the user to the AuthContext
          login(accessToken, refreshToken, userData);
        }
      } catch (error) {
        // If there is an error, redirect to the login page
        router.replace({
          pathname: "/login",
          query: { error: error.response.data.error },
        });
      }
    };

    if (accessToken && refreshToken) {
      // If both tokens are in the URL query, try to get the user profile
      getUserProfile();
    } else if (error) {
      // Redirect to the login page with the error as props
      router.replace({
        pathname: "/login",
        query: { error },
      });
      return; // Stop further execution to prevent the home page redirection
    }
  }, [accessToken, refreshToken, error]);

  // If the tokens are not in the URL query, redirect to the login page after 1 second
  // This is to prevent the loading page showing up forever
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      setTimeout(() => {
        router.replace("/login");
      }, 1000);
    }
  }, [accessToken, refreshToken]);

  return <LoadingPage />;
}

export default redirect;
