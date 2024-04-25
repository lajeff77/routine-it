import React, {useState} from "react";
import {Box, Button, Card, TextField, Typography} from '@mui/material';
import TaskList from './TaskList';


const AddTasksToRoutine = ({props}) => {

    const [item,setItem] = useState("");

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.routineItems.push(item);
        setItem("");
        if(props.routineItems.length > 0)
            props.setReadyForNext(true);
        else
            props.setReadyForNext(false);
    }

    return(
        <Box sx={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>Let's add some tasks to {props.getRoutineName()}.</Typography>
            <Card variant="outlined" sx={{align:"center", width:"70%", display:"flex", flexDirection:"column", outline:"2px"}}>
                <Typography variant="body1"  sx={{margin: '20px'}}>Don't hold back! What is everything you ideally want to accomplish with {props.getRoutineName()}?</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{margin:"20px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <TextField required value={item} onChange={handleChange} id="outlined-required" label="Enter a new task" variant="outlined" sx={{margin: '20px'}}/>
                    <Button variant="contained" type="submit" sx={{width:"100px", margin:"10px", padding:"10px"}}>Add</Button>
                </Box> 
                <TaskList props={{list: props.routineItems, setList: props.setRoutineItems}}/>
            </Card>
        </Box>
    )
}

export default AddTasksToRoutine;