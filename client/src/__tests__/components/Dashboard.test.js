import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import Dashboard from "../../components/Dashboard";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe(Dashboard.name, ()=>{
    test('Dashboard matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<Dashboard />} path="/mydashboard" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});