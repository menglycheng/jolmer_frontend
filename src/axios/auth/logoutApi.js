import axiosInstance from "../axiosConfig";

export const logoutApi = async refreshToken => {
  const url = "/auth/logout";
  const data = { refreshToken };
  const response = await axiosInstance.post(url, data);
  return response;
};
