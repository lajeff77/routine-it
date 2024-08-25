import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Box, Button, LinearProgress, ListItem, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Routine = (props) =>{
    const [mode,setMode] = useState("");

    let label = determineLabel(props.progress);
    const navigate = useNavigate();

    useEffect(() =>{
        //set mode initially when component loads
        setMode(props.mode);
    },[]);

    useEffect(() => {
        console.log(`mode is ${mode}`);
            const putData = async() =>{
                try{
                    console.log(`mode is ${mode}`);
                    props.routine.mode = mode;
                    const response = await axios.put(`http://localhost:8080/api/v1/routines/${props.id}`, props.routine);
                }catch(error){
                    console.log(`An error occurred while updating the routine: ${error}`);
            }
            
        }
        putData();
    },[mode]);

    

    const setRoutineMode = (mode) => {
        console.log(`New mode is ${mode}`);

    }

    const navigateToRoutineChecklist = () => {
        console.log(`id is ${props.id}`);

        navigate("/routinechecklist",{state: {id: props.id}});
    }

    return(
        <ListItem sx={{margin:"10px", display:"flex", justifyContent:"space-around"}}>
            <Typography sx={{width:"150px"}}>{props.name}</Typography>
            <Box sx={{width:"40%"}}><LinearProgress variant="determinate" value={Number(props.progress)} sx={{borderRadius:"5px", margin:"5px"}}/></Box>
            <Box sx={{display:"flex", flexDirection: 'column', justifyContent:'space-around'}}>
                <Typography sx={{textAlign: 'center'}}>Effort Level</Typography>
                <Box sx={{display:"flex", justifyContent:'space-around'}}>
                    <Button type="button" color="error"  variant={mode === "HIGH" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("HIGH")}}>HIGH</Button>
                    <Button type="button" color="warning" variant={mode === "MEDIUM" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("MEDIUM")}}>MEDIUM</Button>
                    <Button type="button" color="success" variant={mode === "LOW" ? "contained": "outlined"} sx={{margin:"5px", width:"75px"}} onClick={() => {setMode("LOW")}}>LOW</Button>
                </Box>
            </Box>
          
            <Button type="button" variant="outlined" sx={{margin:"5px", width:"200px"}} onClick={() => {navigateToRoutineChecklist()}}>{label}</Button>
        </ListItem>
    );
};

function determineLabel(progress){
    if(progress === "0")
        return "Start"
    else {
        if(progress === "100")
            return "Completed"
        else return "Continue"
    }
}

export default Routine;