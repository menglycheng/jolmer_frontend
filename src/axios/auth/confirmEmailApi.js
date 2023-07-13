import axiosInstance from "../axiosConfig";

export const confirmEmailApi = async token => {
  try {
    const response = await axiosInstance.post("/auth/confirm", {
      token,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
