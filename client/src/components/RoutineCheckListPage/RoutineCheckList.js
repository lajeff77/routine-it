import React, {useState} from "react";
import {Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Typography} from "@mui/material";

const RoutineCheckList = (props) => {
    const [checked, setChecked] = useState(() => {
        const initialCheckedState = {};
        props.tasks.forEach(task => {
            initialCheckedState[task.name] = task.complete;
        });
        return initialCheckedState;
    });

    const handleChange = (event) =>
    {
        console.log(`Set ${event.target.name} = ${event.target.checked}`);
        setChecked({...checked, [event.target.name]: event.target.checked});
        //make api call here
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