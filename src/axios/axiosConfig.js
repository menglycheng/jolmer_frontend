import axios from "axios";

const baseURL = "https://api.jolmer.me/api/v1";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
