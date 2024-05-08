import React, {useState} from "react";
import {Field, FieldArray, FormikProvider} from 'formik';
import {Box, Button, Card, IconButton, ListItem, Divider, TextField, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const AddTasksToRoutine = ({props}) => {
    let formik = props.formik;

    const[item,setItem] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const setTaskList = () =>{
        const newTaskList = [
            ...formik.values.tasks, item
          ];
          formik.setFieldValue("tasks", newTaskList);
          setItem('');
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault();
            setTaskList();
        }
    }

    return(
    <FormikProvider value={formik}>
        <Box sx={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>Let's add some tasks to {formik.values.name}.</Typography>
            <Card variant="outlined" sx={{align:"center", width:"70%", display:"flex", flexDirection:"column", outline:"2px"}}>
                <Typography variant="body1"  sx={{margin: '20px'}}>Don't hold back! What is everything you ideally want to accomplish with {formik.values.name}?</Typography>
                <Box component="form" sx={{margin:"20px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <TextField required value={item} onChange={handleChange} id="outlined-required" label="Enter a new task" variant="outlined" sx={{margin: '20px'}} onKeyDown={handleKeyPress}/>
                    <Button variant="contained" onClick={setTaskList} sx={{width:"100px", margin:"10px", padding:"10px"}}>Add</Button>
                </Box> 
                <Box>
                <FieldArray name="tasks" sx={{display:'flex', flexDirection:'column'}}render={(arrayHelpers) => (
                    formik.values.tasks.map((task, index) => (
                        <Box key={index} sx={{width: "100%"}}>
                            <Divider/>
                            <ListItem >
                                <Typography variant="body1">{task}</Typography>
                                <IconButton edge="end" aria-label="delete" onClick={() => arrayHelpers.remove(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem> 
                        </Box>))
                    )}
                />
            </Box>
            </Card>
            
        </Box>
        </FormikProvider>
    )
}

export default AddTasksToRoutine;