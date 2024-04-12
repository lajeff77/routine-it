import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import RoutineList from "../../components/RoutineList";


describe(RoutineList.name, ()=>{
    test('RoutineList matches snapshot', () => {
        const {container} = render(<RoutineList/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});