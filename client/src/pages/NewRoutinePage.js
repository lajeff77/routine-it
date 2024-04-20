import React, {useState} from 'react';
import {Box} from '@mui/material';
import NameRoutine from '../components/NameRoutine';
import SurveyNav from '../components/SurveyNav';

const NewRoutinePage = () => {
    const [index,setIndex] = useState(0);
    const survey =[<NameRoutine/>];

    return(
        <Box>
            {survey[index]}
            <SurveyNav props={{setIndex:setIndex, index:index, maxIndex:survey.length-1}}/>
        </Box>
    );
}

export default NewRoutinePage;