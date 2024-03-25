import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import Dashboard from "../../components/Dashboard";


describe(Dashboard.name, ()=>{
    test('Dashboard matches snapshot', () => {
        const {container} = render(<Dashboard/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});