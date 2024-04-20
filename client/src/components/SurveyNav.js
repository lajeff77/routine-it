import React from "react";
import {useNavigate} from 'react-router-dom';
import {Box, Button} from "@mui/material";

const SurveyNav = ({props}) => {

    const navigate = useNavigate();
        
    const goPrev = () => {
        if(props.index > 0)
            props.setIndex(props.index - 1);
    }

    const goNext = () => {
        if(props.index <= props.maxIndex)
           props.setIndex(props.index + 1);
    }

    const finish = () => { 
        //TODO: call api to create new routine here
        navigate("/myDashboard");
    }

    return(
        <Box display="flex" flexDirection="row" justifyContent="center" sx={{marigin:'50px', padding:'10px'}}>
            <Button disabled={props.index === 0} variant="contained" onClick={goPrev} sx={{width:"100px", margin:"10px", padding:"10px"}}>Previous</Button>
            <Button  variant="contained" onClick={props.index === props.maxIndex? finish: goNext} sx={{width:"100px",  margin:"10px", padding:"10px"}}>{props.index === props.maxIndex? "Finish": "Next"}</Button>
        </Box>
    );
}

export default SurveyNav;