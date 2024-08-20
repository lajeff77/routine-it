import React, { useState } from "react";
import axios from "axios";
import {Box} from "@mui/material";
import RoutineChecklistHeader from "../components/RoutineChecklistHeader";

const RoutineChecklistPage = () => { 

    const [routine,setRoutine] = useState({});
    React.useEffect(() => {
   
          
        axios.get('http://localhost:8080/api/v1/routines/1')
        .then(function (response) {
            // handle success
            console.log(response);
            setRoutine(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },[])
    
    return(
        <Box>
            <RoutineChecklistHeader name={routine.name}/>
        </Box>
    )
}

export default RoutineChecklistPage;