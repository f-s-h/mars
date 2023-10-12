import { PhoneNumber, PhoneNumberState } from "../models";
import React, { FC, ReactNode, useState, createContext } from "react";
import * as service from "../Serivces/PhoneNumberService";

interface PhoneNumberContextProps {
    loading: boolean;
    createPhoneNumber: (accessToken: string, phoneNumber: PhoneNumberState, userId: string) => Promise<PhoneNumber>;
}

const Context = createContext<PhoneNumberContextProps>({
    loading: false,
    createPhoneNumber: (accessToken: string, phoneNumber: PhoneNumberState, userId: string) => new Promise<PhoneNumber>(() => {}),
})

export const PhoneNumberContext: FC<{ children: ReactNode }> = (props) => {
    const [loading, setLoading] = useState(false);

    const createPhoneNumber = async (accessToken: string, phoneNumber: PhoneNumberState, userId: string) => {
        phoneNumber.userId = userId;
        var response = await service.createPhoneNumber(accessToken, phoneNumber);
        if(response === undefined) {
            setLoading(false);
            return new Promise<PhoneNumber>(() => {});
        }
        else {
            setLoading(false);
            return response as PhoneNumber;
        }
    };

    return(
        <Context.Provider
            value = {{
                loading,
                createPhoneNumber,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default PhoneNumberContext
export const usePhoneNumber = () => React.useContext(Context);