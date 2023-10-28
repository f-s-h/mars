import { Input } from "antd"

interface FormInputProps {
    label?: string,
    setValue: (value: any) => void;
}

const FormInput = (props: FormInputProps) => {
    const setValue = props.setValue;

    const onChange = (value: any) => {
        setValue(value);
    }

    return (
        <>
            {props.label? <label>{props.label}</label> : <></>}
            <Input onChange={(e) => onChange(e.target.value)}></Input>
        </>
    )
}

export default FormInput