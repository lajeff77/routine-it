import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../../pages/LandingPage';
import AccountCreationPage from '../../pages/AccountCreationPage';
import SignInPage from "../../pages/SignInPage";
import HeroSection from "../../components/HeroSection";

describe(HeroSection.name, ()=>{
    test('HeroSection matches snapshot', () => {
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
    
    test('link in HeroSection component works correctly', () => {
        render(<MemoryRouter>
            <Routes>
              <Route element={<LandingPage />} path="/" />
              <Route element={<AccountCreationPage />} path="/signup" />
              <Route element={<SignInPage />} path="/signin" />           
            </Routes>
        </MemoryRouter>)

        const links = screen.getAllByRole("link");

        expect(links[4].textContent).toEqual("Get Started!");
        expect(links[4].href).toContain("/signup");
      });
});