import React from 'react';
import {Box, Card, TextField, Typography} from '@mui/material';

const NameRoutine = ({props}) => {
    //TODO: validate that the name isn't a duplicate
    //TODO: figure out how to go next on enter in textfield if valid name
    const handleChange = (e) => {
        props.setRoutineName(e.target.value);
        if(!e.target.value)
            props.setReadyForNext(false);
        else
            props.setReadyForNext(true);
    }

    return(
        <Box sx={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>Let's Make a New Routine!</Typography>
            <Card variant="outlined" sx={{align:"center", width:"70%", display:"flex", flexDirection:"column", outline:"2px"}}>
                <Typography variant="body1" sx={{margin: '20px'}}>We'll start with a name for this routine:</Typography>
                <TextField required onChange={handleChange} id="outlined-required" label="Enter a name" variant="outlined" value={props.routineName} sx={{margin: '20px'}}/>
            </Card>
        </Box>
    )
}

export default NameRoutine;