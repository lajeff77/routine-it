import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Box, Button, LinearProgress, ListItem, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Routine = (props) =>{
    const [mode,setMode] = useState("");
    const [tasks, setTasks] = useState([]);
    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    useEffect(() =>{
        getTasks();
        //set mode initially when component loads
        setMode(props.mode);

    },[]);

    useEffect(()=>{
        //calc progress
        setProgress(calculateProgress);
    },[tasks])


    useEffect(() => {
            const putData = async() =>{
                try{
                    props.routine.mode = mode;
                    await axios.put(`http://localhost:8080/api/v1/routines/${props.id}`, props.routine);
                }catch(error){
                    console.log(`An error occurred while updating the routine: ${error}`);
            }
            
        }
        putData();

        //re calc progress
        setProgress(calculateProgress);
    },[mode]);

    const getTasks = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/api/v1/tasks/${props.id}`);
            setTasks(response.data)
        
        }catch(error){
            console.log(`an error occurred while fetching the tasks to calculate the percentage: ${error}`)
        }
    }

    const calculateProgress = () =>{
        //sort tasks
        let totalTasks = 0;
        let completedTasks = 0;
        for(let i = 0; i < tasks.length; i++)
        {
            if(tasks[i].highEffort && mode === "HIGH")
            {
                totalTasks++;
                if(tasks[i].complete)
                    completedTasks++;
            }
                
            if(tasks[i].mediumEffort && mode === "MEDIUM")
            {
                totalTasks++;
                if(tasks[i].complete)
                    completedTasks++;
            }
                
            if(tasks[i].lowEffort && mode === "LOW")
            {
                totalTasks++;
                if(tasks[i].complete)
                    completedTasks++;
            }
                
        }
        let percent = (completedTasks/totalTasks) *100;
        return isNaN(percent) ? 0 : percent;
    }

    const determineLabel = () => {
        if(progress === 0)
            return "Start"
        else {
            if(progress === 100)
                return "Completed"
            else return "Continue"
        }
    }

    const navigateToRoutineChecklist = () => {
        navigate("/routinechecklist",{state: {id: props.id}});
    }

    return(
        <ListItem sx={{margin:"10px", display:"flex", justifyContent:"space-around"}}>
            <Typography sx={{width:"150px"}}>{props.name}</Typography>
            <Box sx={{width:"40%"}}><LinearProgress variant="determinate" value={progress} sx={{borderRadius:"5px", margin:"5px"}}/></Box>
            <Box sx={{display:"flex", flexDirection: 'column', justifyContent:'space-around'}}>
                <Typography sx={{textAlign: 'center'}}>Effort Level</Typography>
                <Box sx={{display:"flex", justifyContent:'space-around'}}>
                    <Button type="button" color="error"  variant={mode === "HIGH" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("HIGH")}}>HIGH</Button>
                    <Button type="button" color="warning" variant={mode === "MEDIUM" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("MEDIUM")}}>MEDIUM</Button>
                    <Button type="button" color="success" variant={mode === "LOW" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("LOW")}}>LOW</Button>
                </Box>
            </Box>
          
            <Button type="button" variant="outlined" sx={{margin:"5px", width:"200px"}} onClick={() => {navigateToRoutineChecklist()}}>{determineLabel()}</Button>
        </ListItem>
    );
};

export default Routine;