import React, {useState, useEffect} from "react";
import axios, { all } from "axios";
import {Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Typography} from "@mui/material";
import JSConfetti from 'js-confetti'

const RoutineCheckList = (props) => {
    const jsConfetti = new JSConfetti();
    const [checked, setChecked] = useState(() => {
        const initialCheckedState = {};
        props.tasks.forEach(task => {
            initialCheckedState[task.name] = task.complete;
        });
        return initialCheckedState;
    });

    const putData = async(task) =>{
        try{
            const response = await axios.put(`http://localhost:8080/api/v1/tasks/${task.id}`, task);
        }catch(error){
            console.log(`An error occurred while updating the routine: ${error}`);
        }
    }

    const triggerConfetti = () => {
        jsConfetti.addConfetti({
            confettiColors: [
              '#457B3B', '#DD742D', '#C23F38', '#3874CB',
            ],
          });
    }


    const handleChange = async (event) =>
    {
        console.log(`Set ${event.target.name} = ${event.target.checked}`);
        setChecked({...checked, [event.target.name]: event.target.checked});

        let count = 0;
        //update in api here
        props.tasks.forEach(task => {
            if(task.name === event.target.name)
            {
                task.complete = event.target.checked;
                putData(task)
            }
            if(task.complete)
                count++;
        })
     
        if(count === props.tasks.length) 
            triggerConfetti();
    
    }

    return(
        <Box>
            <Typography variant="h2" sx={{textAlign:"center"}}>{props.name}</Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Tasks</FormLabel>
                <FormGroup>
                    {props.tasks.map((task) => (
                        <FormControlLabel
                            key={task.id}
                            control={<Checkbox checked={checked[task.name]} onChange={handleChange} name={task.name} />}
                            label={task.name} 
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Box>
    )
}

export default RoutineCheckList;