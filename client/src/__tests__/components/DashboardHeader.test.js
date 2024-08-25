import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import DashboardHeader from "../../components/DashboardPage/DashboardHeader";


describe(DashboardHeader.name, ()=>{
    test('DashboardHeader matches snapshot', () => {
        const {container} = render(<DashboardHeader/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});