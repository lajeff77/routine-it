import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Routine from "../../components/DashboardPage/Routine";


describe(Routine.name, ()=>{
    test('Routine matches snapshot', () => {
        const { container } = render(
            <MemoryRouter>
            <Routes>
                <Route path="/myDashboard" element={<Routine />} />
            </Routes>
            </MemoryRouter>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
  
});