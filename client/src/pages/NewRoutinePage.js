import React, { useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Stepper, Step, StepLabel, Grid, FormHelperText, Button} from '@mui/material';
import NameRoutine from '../components/NewRoutinePage/NameRoutine';
import AddTasksToRoutine from '../components/NewRoutinePage/AddTasksToRoutine';
import SelectRequiredTasks from '../components/NewRoutinePage/SelectRequiredTasks';

const steps = [ 'Name Routine', 'Add Tasks', 'Configure High Effort Routine', 'Configure Medium Effort Routine', 'Configure Low Effort Routine']

const highEffortText = {
    title: "What tasks can you see yourself doing on an ideal day?",
    prompt: "Select the tasks that you hope to achieve on your best days. These tasks will make up your high effort routine.",
}
const medEffortText = {
    title: "What tasks can you see yourself doing on an average day?",
    prompt: "Select the tasks that you hope to achieve on most days. These tasks will make up your medium effort routine.",
}
const lowEffortText = {
    title: "What tasks do you need to do in order to survive?",
    prompt: "Please only select the tasks that you expect yourself to do at the bare minimum. These tasks will make up your low effort routine.",
}

const NewRoutinePage = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }

    const handleSubmit = () => {
        if(activeStep === steps.length - 1){
            createRoutine();
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
                return formik.errors.lowEffortRoutine;
            case 3:
                return formik.errors.medEffortRoutine;
            case 4: 
                return formik.errors.highEffortRoutine;
            default:
                return false;
        }
    }
    
    const createRoutine = () =>{
        console.log('create routine');
        axios.post('http://localhost:8080/api/v1/routines', {name: formik.values.name});
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            tasks: [],
            highEffortRoutine: [],
            medEffortRoutine: [],
            lowEffortRoutine: []
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required('Please name your routine.'),
            tasks: Yup.array()
            .required('Please add tasks to your routine.')
            .min(1, 'Please add more than one task to your routine'),
            idealRoutine: Yup.array()
            .required('Please select tasks for your high effort routine.')
            .min(1),
            averageRoutine: Yup.array()
            .required('Please select tasks for your medium effort routine.')
            .min(1),
            survivalRoutine: Yup.array()
            .required('Please select tasks for your low effort routine.')
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
                return <SelectRequiredTasks props={{formik: formik, text:highEffortText, id:0}} />
            case 3:
                return <SelectRequiredTasks props={{formik: formik, text:medEffortText, id:1}} />
            case 4:
                return <SelectRequiredTasks props={{formik: formik, text:lowEffortText, id:2}} />
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