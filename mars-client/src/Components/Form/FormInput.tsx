import { Box, TextField } from "@mui/material";
import { theme } from "../../Configuration/theme";

interface FormInputProps {
    label?: string,
    defaultValue?: any,
    setValue: (value: any) => void,
}

const FormInput = (props: FormInputProps) => {
    const setValue = props.setValue;

    const onChange = (value: any) => {
        setValue(value);
    }

    return (
        <Box
            sx={{
                width: "100%",
                disabled: "true",
            }}
        >
            <TextField 
                label={props.label} 
                onChange={(e) => onChange(e.target.value)}
                sx={{
                    margin: "5px",
                    width: "100%",
                }}
                size="small"
                defaultValue={props.defaultValue}
            />
        </Box>
    )
}

export default FormInput