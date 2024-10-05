import React, {useEffect, useState} from 'react';
import {Box, Card, Typography, Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import {Formik, Form} from 'formik';

const SelectRequiredTasks = ({props}) => {
    const [checkedItems, setCheckedItems] = useState([]);

    let formik = props.formik;

    useEffect(() => {
        formik.validateForm();
    },[])

    useEffect(() => {
        switch(props.id){
            case 0:
                formik.setFieldValue("lowEffortRoutine", checkedItems);
                break;
            case 1:
                formik.setFieldValue("medEffortRoutine", checkedItems);                
                break;
            case 2:
                formik.setFieldValue("highEffortRoutine", checkedItems);
                break;
            default:
                //do nothing
                break;
        }
    }, [checkedItems]);

    const handleChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setCheckedItems(prevItems => [...prevItems, name]);
        } else {
            setCheckedItems(prevItems => prevItems.filter(item => item !== name));
        }
    };

    return(
        <Box sx={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>{props.text.title}</Typography>
            <Card variant="outlined" sx={{align:"center", width:"70%", display:"flex", flexDirection:"column", outline:"2px"}}>
                <Typography variant="body1"  sx={{margin: '20px'}}>{props.text.prompt}</Typography>
                <Box>
                    <Formik initialValues={{list: checkedItems}} validateOnChange={true}>
                        <Form name="list">
                            {formik.values.tasks.map((item)=> {return(
                                <Box>
                                    <FormGroup sx={{margin:"20px"}}>
                                        <FormControlLabel control={<Checkbox name={item} checked={checkedItems.includes(item)} onChange={handleChange}/>} label={item} />
                                    </FormGroup>
                                </Box>)
                            })}
                        </Form>
                    </Formik> 
                 </Box>   
            </Card>
        </Box>
    )
}

export default SelectRequiredTasks;

