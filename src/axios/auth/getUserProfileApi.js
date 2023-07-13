import axiosInstance from "../axiosConfig";

// get user profile from api endpoint by passing access token in header
export const getUserProfileApi = async accessToken => {
  const url = "/user/profile";
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await axiosInstance.get(url, { headers });
  return response;
};
