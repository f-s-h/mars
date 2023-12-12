import { useState } from "react";
import { User } from "../../../models";
import { useUser } from "../../../Context/UserContext";
import FormInput from "../../Form/FormInput";
import { Box } from "@mui/material";

interface FormObject {
    label: string,
    defaultValue: any,
    setValue(value: any): void,
}

interface ModifyUserBasicInformationProps {
    newUser: User,
    setNewUser: (user: User) => void,
}

const ModifyUserBasicInformation = (props: ModifyUserBasicInformationProps) => {
    const newUser = props.newUser;
    const setNewUser = props.setNewUser;

    const basicInformation: FormObject[] = [
        {
            label: "Salutation",
            defaultValue: newUser.salutation,
            setValue: (value: any) => {
                setNewUser({
                    ...newUser,
                    salutation: value,
                })
            }
        },
        {
            label: "Prefix",
            defaultValue: newUser.prefix,
            setValue: (value: any) => {
                setNewUser({
                    ...newUser,
                    prefix: value,
                })
            }
        },
        {
            label: "First Name",
            defaultValue: newUser.firstName,
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    firstName: value,
                })
            },
        },
        {
            label: "Last Name",
            defaultValue: newUser.lastName,
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    lastName: value,
                })
            },
        },
        {
            label: "Suffix",
            defaultValue: newUser.suffix,
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    suffix: value,
                })
            },
        },
    ]


    return (
        <Box>
            <h2>Basic Information</h2>
            {basicInformation ?
                basicInformation.map(({ label, defaultValue, setValue }) => {
                    return (
                        <>
                            <FormInput label={label} setValue={setValue} defaultValue={defaultValue}></FormInput>
                        </>
                    )
                })
                : <></>
            }
        </Box>
    )
}

export default ModifyUserBasicInformation