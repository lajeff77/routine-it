import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import AddTasksToRoutine from "../../components/AddTasksToRoutine";


const testProps  = {
    getRoutineName: () => {return "My Routine"},
    routineItems: ["Eat breakfast", "Walk dog", "Clean dishes", "Shower"]
}

describe(AddTasksToRoutine.name, ()=>{
    test('AddTasksToRoutine matches snapshot', () => {
        const {container} = render(<AddTasksToRoutine props={testProps}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});