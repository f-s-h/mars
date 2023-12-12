import { Box, Button } from "@mui/material"

interface StepperButtonBarProps {
    activeStep: number,
    setActiveStep: (step: number) => void,
    nrSteps: number,
    resetValues: () => void,
}

const StepperButtonBar = (props: StepperButtonBarProps) => {
    const activeStep = props.activeStep;
    const setActiveStep = props.setActiveStep;
    const nrSteps = props.nrSteps;
    const resetValues = props.resetValues;

    return (
        <Box
            sx={{
                display: "flex",
                position: "fixed",
                bottom: "0%",
                padding: "2vh",
                justifyContent: "space-between",
                width: "82vw",
            }}
        >
            <Box>
                <Button
                    variant="outlined"
                    onClick={() => {
                        if(activeStep < nrSteps) {
                            setActiveStep(activeStep > 0 ? activeStep - 1 : 0)
                        }
                        else {
                            setActiveStep(0);
                            resetValues();
                        }
                    }}
                    disabled={activeStep === 0}
                    sx={{
                        width: "15vw",
                    }}
                >
                    {activeStep < nrSteps ?
                        <>Previous Step</>
                        :
                        <>Create new User</>
                    }
                </Button>
            </Box>
            <Box>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setActiveStep(activeStep < nrSteps ? activeStep + 1 : nrSteps)
                    }}
                    disabled={activeStep === nrSteps}
                    sx={{
                        width: "15vw",
                    }}
                >
                    {activeStep < nrSteps - 1 ?
                        <>Next Step</>
                        :
                        <>Finish</>
                    }
                </Button>
            </Box>
        </Box>
    )
}

export default StepperButtonBar;