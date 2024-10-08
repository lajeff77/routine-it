import React , {useEffect, useState} from "react";
import axios from "axios";
import Dashboard from "../components/DashboardPage/Dashboard";
import PermanentSideDrawer from "../components/DashboardPage/PermanentSideDrawer";
import {Grid} from '@mui/material';
import Loading from "../components/Common/Loading";

const MyDashboardPage = () => {
    const [routineList, setRoutineList] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/api/v1/routines');

                //handle success
                await setRoutineList(response.data);
                setLoaded(true);
            }
            catch(error){
                console.error('Error fetching routines:', error);
            }
        }

        fetchData();
    },[]);

    return (
        <div>
            <Grid container rowSpacing={2} >
                <Grid item xs={2}><PermanentSideDrawer /></Grid>
                {loaded? <Grid item xs={10}><Dashboard routineList={routineList} /></Grid> : <Loading/> }
            </Grid>
        </div>
    )
}

export default MyDashboardPage;