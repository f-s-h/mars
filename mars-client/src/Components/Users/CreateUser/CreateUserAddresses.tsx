import { Address, User } from "../../../models"
import AddressInput from "../../Form/AddressInput";
import FormInput from "../../Form/FormInput";
import CreateUserObjects from "./CreateUserObjects"

interface CreateUserAddressesProps {
    newUser: User,
    setNewUser: (user: User) => void,
}

const CreateUserAddresses = (props: CreateUserAddressesProps) => {
    const newUser = props.newUser;
    const setNewUser = props.setNewUser;

    const label = "Address";
    const values = newUser.addresses ? newUser.addresses : [];
    const setValues = (values: Address[]) => {
        setNewUser({
            ...newUser,
            addresses: values,
        })
    }

    return (
        <>
            <CreateUserObjects label={label} values={values} setValues={setValues} objectForm={AddressInput} />
        </>   
    )
}

export default CreateUserAddresses