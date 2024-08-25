import { render} from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AccountCreationPage from '../../pages/AccountCreationPage';



describe(AccountCreationPage.name, () => { 
    test('AccountCreationPage matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
            <Routes>
                <Route element={<AccountCreationPage />} path="/signup" />
            </Routes>
            </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });
});