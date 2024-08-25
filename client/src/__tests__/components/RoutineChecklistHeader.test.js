import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import RoutineChecklistHeader from "../../components/RoutineCheckListPage/RoutineChecklistHeader";

const testName = "Test Routine";
describe(RoutineChecklistHeader.name, ()=>{
    test('RoutineChecklistHeader matches snapshot', () => {
        const {container} = render(<RoutineChecklistHeader name={testName}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});