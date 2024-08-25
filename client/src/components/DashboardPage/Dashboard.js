import React from 'react';
import DashboardHeader from './DashboardHeader';
import RoutineList from './RoutineList';

const Dashboard = (props) => {
    return (
        <div>
            <DashboardHeader />
            <RoutineList routineList={props.routineList} />
        </div>
    )
}

export default Dashboard;