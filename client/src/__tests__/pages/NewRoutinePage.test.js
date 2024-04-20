import { render} from "@testing-library/react";
import React from "react";
import NewRoutinePage from "../../pages/NewRoutinePage";
import MyDashboardPage from "../../pages/MyDashboardPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";



describe(NewRoutinePage.name, () => { 
    test('NewRoutinePage matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<MyDashboardPage />} path="/mydashboard" />
                <Route element={<NewRoutinePage />} path="/newroutine" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});