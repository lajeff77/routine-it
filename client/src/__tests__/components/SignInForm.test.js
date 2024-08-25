import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SignInForm from "../../components/SignInPage/SignInForm";

describe(SignInForm.name, ()=>{
    test('SignInForm matches snapshot', () => {
        const { asFragment } = render(
          <MemoryRouter>
            <Routes>
              <Route element={<SignInForm />} path="/signin" />
            </Routes>
          </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();});
});