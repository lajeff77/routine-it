import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Stepper, Step, StepLabel, Grid, FormHelperText, Button} from '@mui/material';
import NameRoutine from '../components/NameRoutine';
import AddTasksToRoutine from '../components/AddTasksToRoutine';

const steps = [ 'Name Routine', 'Add Tasks'] //, 'Ideal Routine', 'Average Routine', 'Survival Routine']

const NewRoutinePage = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }

    const handleSubmit = () => {
        console.log('handling the submit');
        if(activeStep === steps.length - 1){
            //TODO: call api to create new routine here
            console.log("Submitting ...");
            console.log(`name is ${formik.values.name} \n tasks is ${formik.values.tasks}`)
            navigate("/myDashboard");
        }else{
            setActiveStep((prevStep) => prevStep + 1);
        }
    }

    const canGoNext = (step) => {
        switch(step){
            case 0:
                return formik.errors.name
            case 1:
                return formik.errors.tasks
            default:
                return false
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            tasks: [],
            // idealRoutine: [],
            // averageRoutine: [],
            // survivalRoutine: []
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required('Please name your routine.'),
            tasks: Yup.array()
            .required('Please add tasks to your routine.')
            .min(1, 'Please add more than one task to your routine'),
            // idealRoutine: Yup.array()
            // .required('Please select tasks to your ideal routine.')
            // .min(1),
            // averageRoutine: Yup.array()
            // .required('Please select tasks to your average routine.')
            // .min(1),
            // survivalRoutine: Yup.array()
            // .required('Please select tasks to your survival routine.')
            // .min(1),
        }),

        onSubmit: handleSubmit,
    });

    const formContent = (step) => {
        switch(step){
            case 0: 
                return <NameRoutine props={{formik: formik, handleSubmit: handleSubmit}} />
            case 1:
                return <AddTasksToRoutine props={{formik: formik}} />
            // case 2:
            //     return <SelectRequireTasks formik={formik} />
            // case 3:
            //     return <SelectRequireTasks formik={formik} />
            // case 4:
            //     return <SelectRequireTasks formik={formik} />
            default:
                return <div>404 not found</div>
        }
    }

    return(
        <Box>
            <Stepper activeStep={activeStep} sx={{margin: '30px'}}>
                {steps.map((label, index) => {
                    return(
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <Grid container>
                <Grid item xs={12} sx={{padding: '20px'}}>
                    {formContent(activeStep)}
                </Grid>
                {formik.errors.submit && (
                    <Grid item xs={12}>
                        <FormHelperText error>
                            {formik.errors.submit}
                        </FormHelperText>
                    </Grid>
                )}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{width:"100px", margin:"10px", padding:"10px"}}>
                        Back
                    </Button>
                    {activeStep === steps.length -1 ? (
                        <Button disabled={canGoNext(activeStep)} onClick={handleSubmit} variant="contained" sx={{width:"100px", margin:"10px", padding:"10px"}}>
                            Submit
                        </Button> ) : (
                        <Button disabled={canGoNext(activeStep)} onClick={handleSubmit} variant="contained" sx={{width:"100px", margin:"10px", padding:"10px"}}>
                            Next
                        </Button>)}
                </Grid>
            </Grid>
        </Box>
    );
}

export default NewRoutinePage;