import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://localhost:7095/api",
    timeout: 10000,
    responseType: "json",
});

export default axiosInstance;

// TODO: Use Bearer for authentication