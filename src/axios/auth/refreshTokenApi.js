import axiosInstance from "../axiosConfig";

export const refreshTokenApi = async refreshToken => {
  const url = "/auth/refresh-token";
  const data = { refreshToken };
  const response = await axiosInstance.post(url, data);
  return response;
};
