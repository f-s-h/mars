import { Box, TextField } from "@mui/material";

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
        <Box
            sx={{
                width: "100%",
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
            />
        </Box>
    )
}

export default FormInput