import React, { useEffect, useState } from "react";
import axios from "axios";
import {Box, Typography} from "@mui/material";
import RoutineChecklistHeader from "../components/RoutineCheckListPage/RoutineChecklistHeader";
import RoutineCheckList from "../components/RoutineCheckListPage/RoutineCheckListGroup";

const RoutineChecklistPage = () => { 

    const [routine,setRoutine] = useState({});
    const [routineId, setRoutineId] = useState(0);
    const [highEffortTasks, setHighEffortTasks] = useState([]);
    const [medEffortTasks, setMedEffortTasks] = useState([]);
    const [lowEffortTasks, setLowEffortTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
   
        //get the routine and id to get the tasks
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/routines/1')
            
                // handle success
                // console.log(response);
                setRoutine(response.data);
                setRoutineId(response.data.id);

                // query tasks by routine id
                const taskResponse = await axios.get(`http://localhost:8080/api/v1/tasks/${response.data.id}`);
         
                //sort tasks
                // console.log(taskResponse); 
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
    
    return(
        <Box>
            <RoutineChecklistHeader name={routine.name || "Loading..."}/>
            { loaded ? <RoutineCheckList routineId={routineId} highEffortTasks={filterUniqueTasks(highEffortTasks)} medEffortTasks={filterUniqueTasks(medEffortTasks)} lowEffortTasks={filterUniqueTasks(lowEffortTasks)}/> : <Box><Typography variant="h2" sx={{textAlign: "center"}}>Loading...</Typography></Box> }
        </Box>
    )
}

export default RoutineChecklistPage;