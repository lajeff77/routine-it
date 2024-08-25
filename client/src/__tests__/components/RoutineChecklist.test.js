import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import RoutineCheckList from "../../components/RoutineCheckListPage/RoutineCheckList";

const testProps = {
    name: "Low Effort Routine",
    tasks: [{
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
};

describe(RoutineCheckList.name, ()=>{
    test('RoutineCheckList matches snapshot', () => {
        const {container} = render(<RoutineCheckList name={testProps.name} tasks={testProps.tasks}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});