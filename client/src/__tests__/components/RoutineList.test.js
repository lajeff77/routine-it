import { render } from "@testing-library/react";
import {expect, test} from '@jest/globals';
import React from "react";
import RoutineList from "../../components/DashboardPage/RoutineList";
import { MemoryRouter, Route, Routes } from "react-router-dom";



describe(RoutineList.name, ()=>{
    test('RoutineList matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<RoutineList/>} path="/mydashboard" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});