import { Box, Button, Step, StepLabel, Stepper } from "@mui/material"
import { useEffect, useState } from "react"
import { CreateUserStep, createUserSteps } from "./CreateUser/Configuration/createUserStepsConfiguration";
import { theme } from "../../Configuration/theme";
import { User } from "../../models";
import StepperButtonBar from "../Stepper/ButtonBar";
import { useUser } from "../../Context/UserContext";
import { Spin } from "antd";
import { ModifyUserStep, modifyUserStep } from "./ModifyUser/Configuration/modifyUserStepsConfiguration";

const ModifyUser = () => {
    const {
        loading,
        createUser,
    } = useUser();

    const [activeStep, setActiveStep] = useState(0);
    const [newUser, setNewUser] = useState({} as User);

    const nrSteps = modifyUserStep.length;

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
                {modifyUserStep.map(({ label, Component }) => {
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
            {modifyUserStep.map(({ label, Component }: ModifyUserStep, index) => {
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

export default ModifyUser