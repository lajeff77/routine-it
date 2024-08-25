import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom"; 
import CreateAccountForm from "../../components/CreateAccountForm";

describe(CreateAccountForm.name, ()=>{
    test('CreateAccountForm matches snapshot', () => {
        const { asFragment } = render(
          <MemoryRouter>
            <Routes>
              <Route element={<CreateAccountForm />} path="/signup" />
            </Routes>
          </MemoryRouter>
        );
    
        expect(asFragment()).toMatchSnapshot();});
});