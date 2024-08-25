import React from "react";
import { Box, Typography } from "@mui/material";


const DashboardHeader =  () => {
    return (
        <div>
            <Box>
                <Box>
                    <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>My Dashboard</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default DashboardHeader;