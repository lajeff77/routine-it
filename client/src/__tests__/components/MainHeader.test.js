import {render } from '@testing-library/react'
import React from "react";
import { MemoryRouter} from "react-router-dom";
import MainHeader from '../../components/MainHeader';

describe(MainHeader.name, ()=>{
  test('MainHeader matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <MainHeader />
      </MemoryRouter>
    );
    
    expect(container).toMatchSnapshot();
  });

  test('The links in MainHeader are accessible', () => {
    const { getByText } = render(
    <MemoryRouter>
      <MainHeader />
    </MemoryRouter>);
    const homeLink = getByText('Home');
    const signUpLink = getByText('Sign Up');
    const signInLink = getByText('Sign In');
  
    expect(homeLink.getAttribute('href')).toBe('/');
    expect(signUpLink.getAttribute('href')).toBe('/signup');
    expect(signInLink.getAttribute('href')).toBe('/signin');
  });
});
