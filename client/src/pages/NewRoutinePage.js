import React, {useState} from 'react';
import {Box} from '@mui/material';
import NameRoutine from '../components/NameRoutine';
import SurveyNav from '../components/SurveyNav';
import AddTasksToRoutine from '../components/AddTasksToRoutine';

const NewRoutinePage = () => {
    const [index,setIndex] = useState(0);
    const [routineName, setRoutineName] = useState("");
    const [routineItems, setRoutineItems] = useState([]);
    const [readyForNext, setReadyForNext] = useState(false);

    const getRoutineName = () => {
        return routineName;
    }
    const survey = [
        <NameRoutine props={{setRoutineName: setRoutineName, setReadyForNext:setReadyForNext}}/>,
        <AddTasksToRoutine props={{getRoutineName:getRoutineName,  setReadyForNext:setReadyForNext, setRoutineItems: setRoutineItems, routineItems: routineItems}}/>
    ];

    return(
        <Box>
            {survey[index]}
            <SurveyNav props={{setIndex:setIndex, setReadyForNext:setReadyForNext, index:index, maxIndex:survey.length-1, readyForNext: readyForNext}}/>
        </Box>
    );
}

export default NewRoutinePage;