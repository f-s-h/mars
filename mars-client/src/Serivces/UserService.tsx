import { toast } from "react-toastify";
import axiosInstance, { addAccessInterceptor } from "../Configuration/axios"
import { User, UserFormState } from "../models";

const handleError = (error: any, errorMessage: string) => {
    // TODO: Throw toast error
    console.error(error);
    toast.error(errorMessage);
}

const handleSuccess = (successMessage: string) => {
    console.log("Success");
    toast.success(successMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
    });
}

export const getAllUsers = async (accessToken: string) => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.get(
            '/User/GetAllUsers'
        );
        return response.data;
    }
    catch (error) {
        var errorMessage = "Couldn't get all users."
        handleError(error, errorMessage);
        throw error;
    }
};

export const getAllUsersDetail = async (accessToken: string) => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.get(
            '/User/GetAllUsersDetail'
        );
        return response.data;
    }
    catch (error) {
        var errorMessage = "Couldn't get all users with details."
        handleError(error, errorMessage);
        throw error;
    }
};

export const createUser = async (accessToken: string, user: UserFormState): Promise<User> => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.post<User>(
            'User/CreateUser',
            user
        )
        var successMessage = "Created User successfully.";
        handleSuccess(successMessage);
        return response.data;
    }    
    catch (error) {
        var errorMessage = "Could not create user.";
        handleError(error, errorMessage);
        throw error;
    }
} 

export const getUserById = async (accessToken: string, id: string): Promise<User> => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.get(
            `User/GetUserById/${id}`
        )
        return response.data;
    }
    catch (error) {
        var errorMessage = "Could not get user.";
        handleError(error, errorMessage);
        throw error;
    }
}

export const getUserDetailById = async (accessToken: string, id: string): Promise<User> => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.get(
            `User/GetUserDetailById/${id}`
        )
        return response.data;
    }
    catch (error) {
        var errorMessage = "Could not find user with detail.";
        handleError(error, errorMessage);
        throw error;
    }
}