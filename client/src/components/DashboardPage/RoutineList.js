import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button,Divider, List, Typography} from '@mui/material';
import Routine from './Routine';

const RoutineList = (props) => {
    const navigate = useNavigate();

    const newRoutine = () =>{
        navigate("/newroutine");
    }

    return(
        <Box sx={{margin:'100px'}}>
            <Typography variant="h3">Active Routines</Typography>
            <List>
            {props.routineList.map((routine) => (
                        <Box>
                            <Routine name={routine.name} routine={routine} id={routine.id} mode={routine.mode}/>
                            <Divider/>
                        </Box>
                    ))}
            </List>
            <Button variant="contained" sx={{width:"100%", margin:"10px"}} onClick={newRoutine}>Create New Routine</Button>
        </Box>
    );
};

export default RoutineList;