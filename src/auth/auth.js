import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserProfileApi } from "@/axios/auth/getUserProfileApi";
import { refreshTokenApi } from "@/axios/auth/refreshTokenApi";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      // Check if the user is logged in, e.g., by verifying the access token on page load
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken) {
        try {
          // Verify the access token by getting the user's profile from the API endpoint
          // with the access token in the request header
          const response = await getUserProfileApi(accessToken);
          const data = await response.data;

          if (data) {
            // Access token is valid, set the user
            setUser(data);

            // Start the token renewal countdown
            scheduleTokenRenewal(refreshToken);
          }
        } catch (error) {
          console.error("Error getting user profile:", error);
          // Access token is invalid or expired, attempt to refresh the access token
          const refreshedToken = await refreshAccessToken(refreshToken);

          if (refreshedToken) {
            // Get the user's profile from the API endpoint with the new access token
            const response = await getUserProfileApi(
              refreshedToken.accessToken
            );

            // If the response is successful, set the user and update the tokens
            if (response.data) {
              const userData = await response.data;
              setUser(userData);
            }

            // Update the tokens and schedule the next token renewal
            setTokens(refreshedToken.accessToken, refreshedToken.refreshToken);
            scheduleTokenRenewal(refreshedToken.refreshToken);
          } else {
            // Refresh token is invalid or expired, clear the tokens and log the user out
            clearTokens();
          }
        } finally {
          setLoading(false);
        }
      } else {
        // Set loading to false
        setLoading(false);
        
        // No access token found, clear the tokens and log the user out
        clearTokens();
      }
    };

    checkUserLoggedIn();
  }, []);

  const scheduleTokenRenewal = refreshToken => {
    // Calculate the time remaining until the access token expires (4 minutes in milliseconds)
    // Since the access token expires in 5 minutes and the refresh token expires in 30 days,
    // We will schedule the token renewal 1 minute before the access token expires
    const accessTokenExpiry = 4 * 60 * 1000; // 4 minutes
    const timeRemaining =
      accessTokenExpiry -
      (new Date().getTime() - localStorage.getItem("tokenIssuedAt"));

    if (timeRemaining > 0) {
      setTimeout(async () => {
        try {
          const refreshedToken = await refreshAccessToken(refreshToken);

          if (refreshedToken) {
            // Update the tokens and schedule the next token renewal
            setTokens(refreshedToken.accessToken, refreshedToken.refreshToken);
            scheduleTokenRenewal(refreshedToken.refreshToken);
          } else {
            // Refresh token is invalid or expired, clear the tokens and log the user out
            clearTokens();
          }
        } catch (error) {
          console.error("Error renewing access token:", error);
        }
      }, timeRemaining);
    } else {
      // Access token has already expired, clear the tokens and log the user out
      clearTokens();
    }
  };

  const refreshAccessToken = async refreshToken => {
    try {
      // Send a request to the backend to refresh the access token using the refresh token
      const response = await refreshTokenApi(refreshToken);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Error refreshing access token:", error);
      return null;
    }
  };

  const setTokens = (accessToken, refreshToken) => {
    // Save the tokens in local storage or cookies
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("tokenIssuedAt", new Date().getTime().toString());
  };

  const clearTokens = () => {
    // Clear the tokens from local storage or cookies
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenIssuedAt");

    // Set the user to null
    setUser(null);
  };

  const login = async (accessToken, refreshToken, profile) => {
    setTokens(accessToken, refreshToken);
    setUser(profile);

    // Start the token renewal countdown
    scheduleTokenRenewal(refreshToken);

    // Redirect to the desired page
    router.push("/");
  };

  const logout = () => {
    clearTokens();
  };

  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("accessToken");
    return !!accessToken;
  };

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
