import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button,Divider, List, Typography} from '@mui/material';
import Routine from './Routine';

const RoutineList = () => {
    const navigate = useNavigate();

    const newRoutine = () =>{
        navigate("/newroutine");
    }

    return(
        <Box sx={{margin:'100px'}}>
            <Typography variant="h3">Active Routines</Typography>
            <List>
                <Routine name="Morning Routine" progress="100"/>
                <Divider/>
                <Routine name="Exercise Routine" progress="95"/>
                <Divider/>
                <Routine name="Study Routine" progress="30"/>
                <Divider/>
                <Routine name="Night Routine" progress="0"/>
            </List>
            <Button variant="contained" sx={{width:"100%", margin:"10px"}} onClick={newRoutine}>Create New Routine</Button>
        </Box>
    );
};

export default RoutineList;