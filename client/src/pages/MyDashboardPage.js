import React from "react";
import Dashboard from "../components/DashboardPage/Dashboard";
import PermanentSideDrawer from "../components/DashboardPage/PermanentSideDrawer";
import {Grid} from '@mui/material';

const MyDashboardPage = () => {

    return (
        <div>
            <Grid container rowSpacing={2} >
                <Grid item xs={2}><PermanentSideDrawer /></Grid>
                <Grid item xs={10}><Dashboard /></Grid>
            </Grid>
        </div>
    )
}

export default MyDashboardPage;