import React from "react";
import {Box, Typography} from "@mui/material";

const RoutineChecklistHeader = (props) => {
    return(
        <Box>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>{props.name}</Typography>
        </Box>
    )
}

export default RoutineChecklistHeader;