import { render} from "@testing-library/react";
import React from "react";
import MyDashboardPage from "../../pages/MyDashboardPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe(MyDashboardPage.name, () => { 
    test('MyDashboardPage matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<MyDashboardPage />} path="/mydashboard" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});