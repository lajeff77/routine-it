import { render} from "@testing-library/react";
import React from "react";
import SurveyNav from "../../components/SurveyNav";
import MyDashboardPage from "../../pages/MyDashboardPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NewRoutinePage from "../../pages/NewRoutinePage";


describe(SurveyNav.name, () => { 
    test('SurveyNav matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<NewRoutinePage/>} path="/newroutine" />
                <Route element={<MyDashboardPage />} path="/mydashboard" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});