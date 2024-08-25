import { render} from "@testing-library/react";
import React from "react";
import RoutineChecklistPage from "../../pages/RoutineChecklistPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";



describe(RoutineChecklistPage.name, () => { 
    test('RoutineChecklistPage matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<RoutineChecklistPage />} path="/routinechecklist" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});