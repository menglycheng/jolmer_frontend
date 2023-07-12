import axiosInstance from "../axiosConfig";

export const registerApi = async (values) => {
  const url = "/auth/register";
  const data = values;
  const response = await axiosInstance.post(url, data);
  return response;
};
