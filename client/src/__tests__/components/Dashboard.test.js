import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import Dashboard from "../../components/Dashboard";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MyDashboardPage from "../../pages/MyDashboardPage";
import NewRoutinePage from "../../pages/NewRoutinePage";


describe(Dashboard.name, ()=>{
    test('Dashboard matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<MyDashboardPage />} path="/mydashboard" />
                <Route element={<NewRoutinePage/>} path="/newroutine" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});