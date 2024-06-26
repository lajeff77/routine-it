import React from 'react';
import {Box, Button, LinearProgress, ListItem, Typography} from '@mui/material';

const Routine = (props) =>{
    let label = determineLabel(props.progress);
    return(
        <ListItem sx={{margin:"10px", display:"flex", justifyContent:"space-around"}}>
            <Typography sx={{width:"200px"}}>{props.name}</Typography>
            <Box sx={{width:"50%"}}><LinearProgress variant="determinate" value={Number(props.progress)} sx={{borderRadius:"5px"}}/></Box>
            <Button type="button" variant="outlined" sx={{margin:"5px", width:"200px"}}>{label}</Button>
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