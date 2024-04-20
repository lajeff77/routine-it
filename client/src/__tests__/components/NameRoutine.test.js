import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import NameRoutine from "../../components/NameRoutine";


describe(NameRoutine.name, ()=>{
    test('NameRoutine matches snapshot', () => {
        const {container} = render(<NameRoutine/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});