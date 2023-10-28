import { Box, Button } from "@mui/material";
import { ComponentType, useEffect, useState } from "react"

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
        <Box>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <Box>
                    <h2>{props.label}</h2>
                </Box>
                <Box
                    sx={{
                        marginRight: 0,
                        marginLeft: "auto",
                        verticalAlign: "middle",
                        paddingTop: "2vh"
                    }}
                >
                    <Button 
                        variant="outlined"
                        onClick={increaseNrObjects}
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
            <Box>
                {nrObjects > 0 ?
                    [...Array(nrObjects)].map((e, index) => {
                        const addValue = (value: any) => {
                            addObject(value, index);
                        }
                        return (
                            <>
                                <props.objectForm setValue={addValue} label={props.label}/>
                            </>
                        )
                    })
                    : <></>
                }
            </Box>
        </Box>
    )

}

export default CreateUserObjects;