import { Email, PhoneNumber, User } from "../../../models"
import FormInput from "../../Form/FormInput";
import CreateUserObjects from "./CreateUserObjects"

interface CreateUserPhoneNumbersProps {
    newUser: User,
    setNewUser: (user: User) => void,
}

const CreateUserPhoneNumbers = (props: CreateUserPhoneNumbersProps) => {
    const newUser = props.newUser;
    const setNewUser = props.setNewUser;

    const label = "Phone Number";
    const values = newUser.phoneNumbers ? newUser.phoneNumbers.map((value) => (value.number)) : [];
    const setValues = (values: string[]) => {
        setNewUser({
            ...newUser,
            phoneNumbers: values.map((value) => ({ number: value } as PhoneNumber)),
        })
    }

    return (
        <>
            <CreateUserObjects label={label} values={values} setValues={setValues} objectForm={FormInput} />
        </>   
    )
}

export default CreateUserPhoneNumbers