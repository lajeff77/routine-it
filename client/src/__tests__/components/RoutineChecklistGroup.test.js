import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import RoutineCheckListGroup from "../../components/RoutineCheckListPage/RoutineCheckListGroup";

const testProps = {
    routineId:1,
    highEffortTasks:[
        {
            "id": 1,
            "routineId": 1,
            "name": "Brush teeth",
            "highEffort": true,
            "mediumEffort": true,
            "lowEffort": true,
            "complete": false
        },
        {
            "id": 2,
            "routineId": 1,
            "name": "Wash face",
            "highEffort": true,
            "mediumEffort": true,
            "lowEffort": true,
            "complete": false
        },
        {
            "id": 3,
            "routineId": 1,
            "name": "Mirror affirmations",
            "highEffort": true,
            "mediumEffort": true,
            "lowEffort": false,
            "complete": false
        },
        {
            "id": 4,
            "routineId": 1,
            "name": "Do makeup",
            "highEffort": true,
            "mediumEffort": false,
            "lowEffort": false,
            "complete": false
        }
    ],
    medEffortTasks:[ {
        "id": 1,
        "routineId": 1,
        "name": "Brush teeth",
        "highEffort": true,
        "mediumEffort": true,
        "lowEffort": true,
        "complete": false
    },
    {
        "id": 2,
        "routineId": 1,
        "name": "Wash face",
        "highEffort": true,
        "mediumEffort": true,
        "lowEffort": true,
        "complete": false
    },
    {
        "id": 3,
        "routineId": 1,
        "name": "Mirror affirmations",
        "highEffort": true,
        "mediumEffort": true,
        "lowEffort": false,
        "complete": false
    }],
    lowEffortTasks:[{
        "id": 1,
        "routineId": 1,
        "name": "Brush teeth",
        "highEffort": true,
        "mediumEffort": true,
        "lowEffort": true,
        "complete": false
    },
    {
        "id": 2,
        "routineId": 1,
        "name": "Wash face",
        "highEffort": true,
        "mediumEffort": true,
        "lowEffort": true,
        "complete": false
    }]
}

describe(RoutineCheckListGroup.name, ()=>{
    test('RoutineCheckListGroup matches snapshot', () => {
        const {container} = render(<RoutineCheckListGroup routineId={testProps.routineId} highEffortTasks={testProps.highEffortTasks} medEffortTasks={testProps.medEffortTasks}q lowEffortTasks={testProps.lowEffortTasks}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});