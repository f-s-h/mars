import { useOidc, useOidcAccessToken } from "@axa-fr/react-oidc";
import axios from "axios";
import { config } from "process";

const axiosInstance = axios.create({
    baseURL: "https://localhost:7095/api",
    timeout: 10000,
    responseType: "json",
});

export const addAccessInterceptor = (accessToken: string) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            console.log(accessToken);
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
    
            console.log("Conig:");
            console.log(config.headers);
    
            return config;
        },
    );
}

export default axiosInstance;

// TODO: Use Bearer for authentication