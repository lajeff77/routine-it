import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Stepper, Step, StepLabel, Grid, FormHelperText, Button} from '@mui/material';
import NameRoutine from '../components/NameRoutine';
import AddTasksToRoutine from '../components/AddTasksToRoutine';
import SelectRequiredTasks from '../components/SelectRequiredTasks';

const steps = [ 'Name Routine', 'Add Tasks', 'Configure Ideal Routine', 'Configure Average Routine', 'Configure Survival Routine']

const idealText = {
    title: "What tasks can you see yourself doing on an ideal day?",
    prompt: "Select the tasks that you hope to achieve on your best days.",
}
const averageText = {
    title: "What tasks can you see yourself doing on an average day?",
    prompt: "Select the tasks that you hope to achieve on most days.",
}
const survivalText = {
    title: "What tasks do you need to do in order to survive?",
    prompt: "Please only select the tasks that you expect yourself to do at the bare minimum.",
}

const NewRoutinePage = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }

    const handleSubmit = () => {
        if(activeStep === steps.length - 1){
            //TODO: call api to create new routine here
            // console.log(`name is ${formik.values.name} \n tasks is ${formik.values.tasks}\n idealRoutine is ${formik.values.idealRoutine}\n averageRoutine is ${formik.values.averageRoutine}\n survivalRoutine is ${formik.values.survivalRoutine}`)
            navigate("/myDashboard");
        }else{
            setActiveStep((prevStep) => prevStep + 1);
        }
    }

    const canGoNext = (step) => {
        switch(step){
            case 0:
                return formik.errors.name;
            case 1:
                return formik.errors.tasks;
            case 2:
                return formik.errors.idealRoutine;
            case 3:
                return formik.errors.averageRoutine;
            case 4: 
                return formik.errors.survivalRoutine;
            default:
                return false;
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            tasks: [],
            idealRoutine: [],
            averageRoutine: [],
            survivalRoutine: []
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required('Please name your routine.'),
            tasks: Yup.array()
            .required('Please add tasks to your routine.')
            .min(1, 'Please add more than one task to your routine'),
            idealRoutine: Yup.array()
            .required('Please select tasks to your ideal routine.')
            .min(1),
            averageRoutine: Yup.array()
            .required('Please select tasks to your average routine.')
            .min(1),
            survivalRoutine: Yup.array()
            .required('Please select tasks to your survival routine.')
            .min(1),
        }),

        onSubmit: handleSubmit,
    });

    const formContent = (step) => {
        switch(step){
            case 0: 
                return <NameRoutine props={{formik: formik, handleSubmit: handleSubmit}} />
            case 1:
                return <AddTasksToRoutine props={{formik: formik}} />
            case 2:
                return <SelectRequiredTasks props={{formik: formik, text:idealText, id:0}} />
            case 3:
                return <SelectRequiredTasks props={{formik: formik, text:averageText, id:1}} />
            case 4:
                return <SelectRequiredTasks props={{formik: formik, text:survivalText, id:2}} />
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