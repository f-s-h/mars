import { Box } from "@mui/material";
import { ComponentType, useEffect, useState } from "react"

interface CreateUserObjectsProps {
    label: string,
    values: any,
    setValues: (object: any[]) => void,
    objectForm: ComponentType<{
        setValue: (value: any) => void,
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
        if(nrObjects > 0) {
            setNrObjects(nrObjects - 1);
        }
    }

    const setValuesLog = (values: any) => {
        console.log(values);
        setValues(values);
    }

    const addObject = (value: any, index: number) => {
        values[index] = value;
        setValues(values);
    }

    return(
        <Box>
            <label>{props.label}</label>
            <Box>
                {nrObjects > 0? 
                    [...Array(nrObjects)].map((e, index) => {
                        const addValue = (value: any) => {
                            addObject(value, index);
                        }
                        return(
                            <>
                                <props.objectForm setValue={addValue}/>
                            </>
                        )
                    })
                : <></>
                }
            </Box>
            <Box>
                <button onClick={increaseNrObjects}>+</button>
                <button onClick={decreaseNrObjects}>-</button>
            </Box>
        </Box>
    )

}

export default CreateUserObjects;