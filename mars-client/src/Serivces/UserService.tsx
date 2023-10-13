import axiosInstance, { addAccessInterceptor } from "../Configuration/axios"
import { User, UserFormState } from "../models";

const handleError = (error: any, errorMessage: string) => {
    // TODO: Throw toast error
    console.error(errorMessage);
    console.error(error);
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

export const createUser = async (accessToken: string, user: UserFormState): Promise<User> => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.post<User>(
            'User/CreateUser',
            user
        )
        return response.data;
    }    
    catch (error) {
        var errorMessage = "Could not create user."
        handleError(error, errorMessage);
        throw error;
    }
} 