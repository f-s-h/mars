import { ComponentType } from "react";
import Error404 from "../../../Error/Error404";
import CreateUserBasicInformation from "../CreateUserBasicInformation";
import { User } from "../../../../models";
import CreateUserEmails from "../CreateUserEmails";
import CreateUserPhoneNumbers from "../CreateUserPhoneNumbers";
import CreateUserAddresses from "../CreateUserAddresses";

export interface CreateUserStep {
    label: string,
    Component: ComponentType<{
        newUser: User,
        setNewUser: (user: User) => void,
    }>,
}

export const createUserSteps: CreateUserStep[] = [
    {
        label: "Basic Information",
        Component: CreateUserBasicInformation,
    },
    {
        label: "Emails",
        Component: CreateUserEmails,
    },
    {
        label: "Phonenumbers",
        Component: CreateUserPhoneNumbers,
    },
    {
        label: "Addresses",
        Component: CreateUserAddresses,
    },
]