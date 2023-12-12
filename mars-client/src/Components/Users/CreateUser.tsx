import { Box, Button, Step, StepLabel, Stepper } from "@mui/material"
import { useEffect, useState } from "react"
import { CreateUserStep, createUserSteps } from "./CreateUser/Configuration/createUserStepsConfiguration";
import { theme } from "../../Configuration/theme";
import { User } from "../../models";
import StepperButtonBar from "../Stepper/ButtonBar";
import { useUser } from "../../Context/UserContext";
import { Spin } from "antd";

const CreateUser = () => {
    const {
        loading,
        createUser,
    } = useUser();

    const [activeStep, setActiveStep] = useState(0);
    const [newUser, setNewUser] = useState({} as User);

    const nrSteps = createUserSteps.length;

    useEffect(() => {
        console.log(newUser);
    }, [newUser])

    useEffect(() => {
        if(activeStep == nrSteps) {
            createUser(newUser);
            setNewUser({} as User);
        }
    }, [activeStep])

    const resetUser = () => {
        setNewUser({} as User);
    }

    return (
        <>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
            >
                {createUserSteps.map(({ label, Component }) => {
                    return (
                        <Step>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    )
                })
                }
            </Stepper>
            {createUserSteps.map(({ label, Component }: CreateUserStep, index) => {
                return (
                    <>
                        {activeStep === index ?
                            <Box
                                sx={{
                                    paddingRight: "20vw",
                                    paddingLeft: "20vw",
                                }}
                            >
                                <Component newUser={newUser} setNewUser={setNewUser}/>
                            </Box>
                            : <></>
                        }
                    </>
                )
            })}
            <StepperButtonBar activeStep={activeStep} setActiveStep={setActiveStep} nrSteps={nrSteps} resetValues={resetUser}/>
        </>
    )
}

export default CreateUser