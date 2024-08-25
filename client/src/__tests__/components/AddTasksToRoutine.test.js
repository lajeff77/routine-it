import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import AddTasksToRoutine from "../../components/NewRoutinePage/AddTasksToRoutine";

const mockFormik = {
    values: {
        name: '',
        tasks: [],
        idealRoutine: [],
        averageRoutine: [],
        survivalRoutine: []
    },
    errors: {},
    touched: {},
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
};

const testProps = {
    formik: mockFormik,
    
};

describe(AddTasksToRoutine.name, ()=>{
    test('AddTasksToRoutine matches snapshot', () => {
        const {container} = render(<AddTasksToRoutine props={testProps}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});