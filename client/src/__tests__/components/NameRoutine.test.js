import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import NameRoutine from "../../components/NameRoutine";

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
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
};

const testProps = {
    formik: mockFormik,
    handleSubmit: jest.fn()
};

describe(NameRoutine.name, ()=>{
    test('NameRoutine matches snapshot', () => {
        const {container} = render(<NameRoutine props={testProps}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});