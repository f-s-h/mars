import React from 'react'
import { PhoneNumber, PhoneNumberState } from '../models';
import axiosInstance, { addAccessInterceptor } from '../Configuration/axios';

const handleError = (error: any, errorMessage: string) => {
    // TODO: Throw toast error
    console.error(errorMessage);
    console.error(error);
}

export const createPhoneNumber = async (accessToken: string, phoneNumber: PhoneNumberState): Promise<PhoneNumber> => {
    try {
        addAccessInterceptor(accessToken);
        const response = await axiosInstance.post<PhoneNumber>(
            '/PhoneNumber/CreatePhoneNumber'
        );
        return response.data;
    }
    catch(error) {
        var errorMessage = "Could not create phonenumber.";
        handleError(error, errorMessage);
        throw error;
    }
}