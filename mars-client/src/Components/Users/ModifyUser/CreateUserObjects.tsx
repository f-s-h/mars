import { Box, Button, Typography } from "@mui/material";
import { ComponentType, useEffect, useState } from "react"
import { theme } from "../../../Configuration/theme";


interface CreateUserObjectsProps {
    label: string,
    values: any,
    setValues: (object: any[]) => void,
    objectForm: ComponentType<{
        setValue: (value: any) => void,
        label: string,
    }>,
}

const CreateUserObjects = (props: CreateUserObjectsProps) => {
    const setValues = props.setValues;
    const values = props.values;
    const [nrObjects, setNrObjects] = useState(1);

    const increaseNrObjects = () => {
        setNrObjects(nrObjects + 1);
    }

    const decreaseNrObjects = () => {
        if (nrObjects > 0) {
            setNrObjects(nrObjects - 1);
        }
    }

    const addObject = (value: any, index: number) => {
        values[index] = value;
        setValues(values);
    }

    return (
        <Box
        >
            <Box>
                <h2 >{props.label}</h2>
            </Box>

            <Box>
                {nrObjects > 0 ?
                    [...Array(nrObjects)].map((e, index) => {
                        const addValue = (value: any) => {
                            addObject(value, index);
                        }
                        return (
                            <>
                                {/**
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                    }}
                                >{props.label} {index + 1}</Typography>
                                 */}
                                <props.objectForm setValue={addValue} label={props.label} />
                            </>
                        )
                    })
                    : <></>
                }
            </Box>
            <Box
                sx={{
                    marginRight: 0,
                    marginLeft: "auto",
                    verticalAlign: "middle",
                }}
            >
                <Button
                    variant="outlined"
                    onClick={increaseNrObjects}
                    sx={{
                        marginLeft: "0.25vw",
                        marginRight: "0.5vw",
                    }}
                >
                    +
                </Button>
                <Button
                    variant="outlined"
                    onClick={decreaseNrObjects}
                >
                    -
                </Button>
            </Box>
        </Box>
    )

}

export default CreateUserObjects;