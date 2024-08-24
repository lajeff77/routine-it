import React, {useState} from "react";
import {Box, Tab, Tabs } from "@mui/material";
import RoutineCheckList from "./RoutineCheckList";

const RoutineCheckListGroup = (props) => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        
        setTabIndex(newTabIndex);
    };

    return(
        <Box>
            <Tabs value={tabIndex}  variant="fullWidth" onChange={handleTabChange} sx={{margin: '30px'}}>
                <Tab label="High Effort" />
                <Tab label="Medium Effort" />
                <Tab label="Low Effort" />
            </Tabs>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && <RoutineCheckList  name="High Effort Routine" tasks={props.highEffortTasks}/>}
                {tabIndex === 1 && <RoutineCheckList  name="Medium Effort Routine" tasks={props.medEffortTasks}/>}
                {tabIndex === 2 && <RoutineCheckList  name="Low Effort Routine" tasks={props.lowEffortTasks}/>}
            </Box>
        </Box>
    )
}

export default RoutineCheckListGroup;