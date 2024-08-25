import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {Box, Typography} from "@mui/material";
import RoutineChecklistHeader from "../components/RoutineCheckListPage/RoutineChecklistHeader";
import RoutineCheckList from "../components/RoutineCheckListPage/RoutineCheckList";

const RoutineChecklistPage = () => { 

    const [routine,setRoutine] = useState({});
    const [routineId, setRoutineId] = useState(0);
    const [mode, setMode] = useState("");
    const [highEffortTasks, setHighEffortTasks] = useState([]);
    const [medEffortTasks, setMedEffortTasks] = useState([]);
    const [lowEffortTasks, setLowEffortTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const { id } = location.state || {};  // Access the id from state


    useEffect(() => {
        
   
        //get the routine and id to get the tasks
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/routines/${id}`)
            
                // handle success
                setRoutine(response.data);
                setRoutineId(response.data.id);
                setMode(response.data.mode);

                // query tasks by routine id
                const taskResponse = await axios.get(`http://localhost:8080/api/v1/tasks/${response.data.id}`);
         
                //sort tasks
                var taskResp = taskResponse.data;
                for(let i = 0; i < taskResp.length; i++)
                {
                    if(taskResp[i].highEffort)
                        await setHighEffortTasks(highEffortTasks => [...highEffortTasks, taskResp[i]]);
                    if(taskResp[i].mediumEffort)
                        await setMedEffortTasks(medEffortTasks => [...medEffortTasks, taskResp[i]]);
                    if(taskResp[i].lowEffort)
                        await setLowEffortTasks(lowEffortTasks => [...lowEffortTasks, taskResp[i]]);
                }
                await setLoaded(true);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    },[])

    const filterUniqueTasks = (array) => {
        const uniqueTasks = Array.from(
            new Map(Array.from(array).map(task => [task.name, task])).values()
        );
        return uniqueTasks;
    }

    const getTasksByMode = () =>{
        switch(mode){
          case 'HIGH' :
            return filterUniqueTasks(highEffortTasks)
        case 'MEDIUM' :
            return filterUniqueTasks(medEffortTasks)
        case 'LOW' :
            return filterUniqueTasks(lowEffortTasks)
        }
        
    }

    const getNameByMode =  () =>{
        switch(mode){
            case 'HIGH' :
              return "High Effort Routine"
          case 'MEDIUM' :
              return "Medium Effort Routine"
          case 'LOW' :
              return "Low Effort Routine"
          }
    }
    
    return(
        <Box sx={{margin:'10%'}}>
            <RoutineChecklistHeader name={routine.name || "Loading..."}/>
            { loaded ? <RoutineCheckList name={getNameByMode()} tasks={getTasksByMode()} /> : <Box><Typography variant="h2" sx={{textAlign: "center"}}>Loading...</Typography></Box> }
        </Box>
    )
}

export default RoutineChecklistPage;