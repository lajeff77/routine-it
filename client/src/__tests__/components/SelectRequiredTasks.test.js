import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import SelectRequiredTasks from "../../components/NewRoutinePage/SelectRequiredTasks";

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
    validateForm: jest.fn(),
    setFieldValue: jest.fn(),
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
};

const textMock = {
    title: '',
    prompt: ''
}

const testProps = {
    formik: mockFormik,
    list: [],
    text: textMock,
    id: 0
};

describe(SelectRequiredTasks.name, ()=>{
    test('SelectRequiredTasks matches snapshot', () => {
        const {container} = render(<SelectRequiredTasks props={testProps}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});