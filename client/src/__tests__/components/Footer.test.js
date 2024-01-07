import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../../pages/LandingPage';
import AccountCreationPage from '../../pages/AccountCreationPage';
import SignInPage from "../../pages/SignInPage";
import Footer from "../../components/Footer";

describe(Footer.name, ()=>{
    test('Footer matches snapshot', () => {
        const { asFragment } = render(
          <MemoryRouter>
            <Routes>
              <Route element={<LandingPage />} path="/" />
              <Route element={<AccountCreationPage />} path="/signup" />
              <Route element={<SignInPage />} path="/signin" />
            </Routes>
          </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();});
});