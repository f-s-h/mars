import { ComponentType } from "react";
import { User } from "../../../../models";
import CreateUserEmails from "../CreateUserEmails";
import CreateUserPhoneNumbers from "../CreateUserPhoneNumbers";
import ModifyUserAddresses from "../ModifyUserAddresses";
import ModifyUserBasicInformation from "../ModifyUserBasicInformation";

export interface ModifyUserStep {
    label: string,
    Component: ComponentType<{
        newUser: User,
        setNewUser: (user: User) => void,
    }>,
}

export const modifyUserStep: ModifyUserStep[] = [
    {
        label: "Basic Information",
        Component: ModifyUserBasicInformation,
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
        Component: ModifyUserAddresses,
    },
]