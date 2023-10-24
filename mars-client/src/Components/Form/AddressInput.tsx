import { useState } from "react";
import { AddressFormState } from "../../models";
import FormInput from "./FormInput";

interface AddressInputProps {
    setValue: (value: any) => void,
}

interface FormAddress {
    label: string,
    setValue(value: any): void,
}

const AddressInput = (props: AddressInputProps) => {
    const setValue = props.setValue;
    const [address, setAddress] = useState({} as AddressFormState);

    const addressData: FormAddress[] = [
        {
            label: "Street",
            setValue(value: any) {
                setAddress({
                    ...address,
                    street: value,
                });
                setValue(address);
            }
        },
        {
            label: "House Number",
            setValue(value: any) {
                setAddress({
                    ...address,
                    houseNumber: value,
                });
                setValue(address);
            }
        },
        {
            label: "City",
            setValue(value: any) {
                setAddress({
                    ...address,
                    city: value,
                });
                setValue(address);
            }
        },
        {
            label: "Postal Code",
            setValue(value: any) {
                setAddress({
                    ...address,
                    postalCode: value,
                });
                setValue(address);
            }
        },
    ];

    return(
        <>
            {addressData? 
                addressData.map(({label, setValue}) => {
                    return(
                        <FormInput label={label} setValue={setValue}/>
                    )
                })
            : <></>
            }
        </>
    )
}

export default AddressInput;