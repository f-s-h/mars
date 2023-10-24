import { DatePicker, Spin } from 'antd'
import { Box } from '@mui/material'
import { useUser } from '../../Context/UserContext'
import { Address, Email, PhoneNumber, User } from '../../models'
import { OidcSecure } from '@axa-fr/react-oidc/'
import { ComponentType, useState } from 'react'
import CreateUserObjects from './UserDetail/CreateUser/CreateUserObjects'
import FormInput from '../Form/FormInput'
import AddressInput from '../Form/AddressInput'

interface FormObject {
    label: string,
    setValue(value: any): void,
}

interface FormObjectArray {
    label: string,
    values: any[],
    setValues(values: any[]): void,
    objectForm: ComponentType<{
        setValue: (value: any) => void,
    }>,
}

export const CreateUser = () => {
    const [newUser, setNewUser] = useState<User>({} as User);
    const {
        loading,
        createUser,
    } = useUser();

    const onSubmit = async () => {
        var userResponse = await createUser(newUser);
        console.log(userResponse);
        setNewUser({} as User);
    }

    const data: FormObject[] = [
        {
            label: "Salutation",
            setValue: (value: any) => {
                setNewUser({
                    ...newUser,
                    salutation: value,
                })
            }
        },
        {
            label: "Prefix",
            setValue: (value: any) => {
                setNewUser({
                    ...newUser,
                    prefix: value,
                })
            }
        },
        {
            label: "First Name",
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    firstName: value,
                })
            },
        },
        {
            label: "Last Name",
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    lastName: value,
                })
            },
        },
        {
            label: "Suffix",
            setValue(value: any) {
                setNewUser({
                    ...newUser,
                    suffix: value,
                })
            },
        },
    ]

    const dataArrays: FormObjectArray[] = [
        {
            label: "Emails",
            values: newUser.emails? newUser.emails.map((value) => (value.email)) : [],
            setValues(values: any[]) {
                setNewUser({
                    ...newUser,
                    emails: values.map((value) => ({email: value} as Email)),
                })
            },
            objectForm: FormInput,
        },
        {
            label: "Phonenumbers",
            values: newUser.phoneNumbers? newUser.phoneNumbers.map((value) => (value.number)) : [],
            setValues(values: any[]) {
                setNewUser({
                    ...newUser,
                    phoneNumbers: values.map((value) => ({number: value} as PhoneNumber)),
                })
            },
            objectForm: FormInput,
        },
        {
            label: "Address",
            values: [],
            setValues(values: any[]) {
                console.log("Create User");
                console.log(values);
                setNewUser({
                    ...newUser,
                    addresses: values,
                })
            },
            objectForm: AddressInput,
        }   
    ]

    return (
        <OidcSecure>
            <h1>Create User</h1>
            {loading ?
                <Spin />
                :
                <Box>
                    {data ?
                        data.map(({ label, setValue }) => {
                            return (
                                <>
                                    <FormInput label={label} setValue={setValue}></FormInput>
                                </>
                            )
                        })
                        : <></>
                    }
                    <label>Birthday</label>
                    {/**TODO */}
                    <Box><DatePicker onSelect={() => {}/*(e) => setNewUser({...newUser, birthday: e.toDate()})*/} format={'DD.MM.YYYY'}/></Box>
                    {dataArrays ?
                        dataArrays.map(({ label, values, setValues, objectForm }) => {
                            return (
                                <>
                                    <CreateUserObjects label={label} values={values} setValues={setValues} objectForm={objectForm} />
                                </>
                            )
                        })
                        : <></>
                    }
                    <button onClick={onSubmit}>Finish</button>
                </Box>
            }
            <Box>

            </Box>
        </OidcSecure>
    )
}