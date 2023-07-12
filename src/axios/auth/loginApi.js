import axiosInstance from "../axiosConfig";

export const loginApi = async (values) => {
  const url = "/auth/login";
  const data = values;
  const response = await axiosInstance.post(url, data);
  return response;
};
