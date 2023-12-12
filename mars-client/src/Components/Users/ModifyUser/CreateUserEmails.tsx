import { Email, User } from "../../../models"
import FormInput from "../../Form/FormInput";
import CreateUserObjects from "./CreateUserObjects"

interface CreateUserEmailsProps {
    newUser: User,
    setNewUser: (user: User) => void,
}

const CreateUserEmails = (props: CreateUserEmailsProps) => {
    const newUser = props.newUser;
    const setNewUser = props.setNewUser;

    const label = "Email";
    const values = newUser.emails ? newUser.emails.map((value) => (value.email)) : [];
    const setValues = (values: string[]) => {
        setNewUser({
            ...newUser,
            emails: values.map((value) => ({ email: value } as Email)),
        })
    }

    return (
        <>
            <CreateUserObjects label={label} values={values} setValues={setValues} objectForm={FormInput} />
        </>   
    )
}

export default CreateUserEmails