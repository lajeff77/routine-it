import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Box, Button,Divider, List, Typography} from '@mui/material';
import Routine from './Routine';

const RoutineList = (props) => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const newRoutine = () =>{
        navigate("/newroutine");
    }

    const getTasks = async (routineId) => {
        try{
            const response = await axios.get(`http://localhost:8080/api/v1/tasks/${routineId}`);
            setTasks(response.data)
        
        }catch(error){
            console.log(`an error occurred while fetching the tasks to calculate the percentage: ${error}`)
        }
    }

    const calculateRoutineProgress = (routineId, mode) =>{
        //parse routine with level to see how many 
        // TODO call tasks api here
        getTasks(routineId);
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
        let percent = (totalTasks/completedTasks) *100;
        console.log(`percent is ${percent}`);
        return percent.toString();
    }

    return(
        <Box sx={{margin:'100px'}}>
            <Typography variant="h3">Active Routines</Typography>
            <List>
            {props.routineList.map((routine) => (
                        <Box>
                            <Routine name={routine.name} routine={routine} id={routine.id} progress={() => calculateRoutineProgress(routine.id, routine.mode)} mode={routine.mode}/>
                            <Divider/>
                        </Box>
                    ))}
            </List>
            <Button variant="contained" sx={{width:"100%", margin:"10px"}} onClick={newRoutine}>Create New Routine</Button>
        </Box>
    );
};

export default RoutineList;