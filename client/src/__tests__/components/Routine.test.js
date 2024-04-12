import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import Routine from "../../components/Routine";


describe(Routine.name, ()=>{
    test('Routine matches snapshot', () => {
        const {container} = render(<Routine/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});