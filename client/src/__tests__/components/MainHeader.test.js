import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MainHeader from '../../components/MainHeader';
import LandingPage from '../../pages/LandingPage';
import AccountCreationPage from '../../pages/AccountCreationPage';
import SignInPage from "../../pages/SignInPage";

describe(MainHeader.name, ()=>{
    test('MainHeader matches snapshot', () => {
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
    
    test('links in MainHeader component work correctly', () => {
        render(<MemoryRouter>
            <Routes>
                <Route element={<LandingPage />} path="/" />
                <Route element={<AccountCreationPage />} path="/signup" />
                <Route element={<SignInPage />} path="/signin" />
            </Routes>
        </MemoryRouter>)

        const links = screen.getAllByRole("link");

        expect(links[0].textContent).toEqual("Routine It");
        expect(links[0].href).toContain("/");
        expect(links[1].textContent).toEqual("Home");
        expect(links[1].href).toContain("/");
        expect(links[2].textContent).toEqual("Sign Up");
        expect(links[2].href).toContain("/signup");
        expect(links[3].textContent).toEqual("Sign In");
        expect(links[3].href).toContain("/signin");
      });
});
